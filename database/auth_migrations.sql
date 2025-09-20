-- Authentication enhancement migrations for PolicyLabs APSS
-- Add 2FA support, email verification, and session management

-- Create enum for verification types
CREATE TYPE verification_type AS ENUM ('email', 'phone', 'password_reset', '2fa_setup');
CREATE TYPE session_status AS ENUM ('active', 'expired', 'revoked');

-- Add additional columns to users table for enhanced authentication
ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20);
ALTER TABLE users ADD COLUMN IF NOT EXISTS profile_image_url VARCHAR(1000);
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS login_attempts INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS locked_until TIMESTAMP WITH TIME ZONE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS verification_token VARCHAR(255);
ALTER TABLE users ADD COLUMN IF NOT EXISTS verification_token_expires TIMESTAMP WITH TIME ZONE;

-- Create user verification codes table for email/phone verification
CREATE TABLE IF NOT EXISTS user_verification_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    code VARCHAR(10) NOT NULL,
    type verification_type NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used_at TIMESTAMP WITH TIME ZONE,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create 2FA secrets table for TOTP
CREATE TABLE IF NOT EXISTS user_2fa_secrets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    secret VARCHAR(255) NOT NULL,
    backup_codes JSONB, -- Array of backup codes
    enabled_at TIMESTAMP WITH TIME ZONE,
    last_used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user sessions table for JWT token management
CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) NOT NULL UNIQUE,
    refresh_token VARCHAR(255) NOT NULL UNIQUE,
    status session_status DEFAULT 'active',
    ip_address INET,
    user_agent TEXT,
    device_info JSONB,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create password reset tokens table
CREATE TABLE IF NOT EXISTS password_reset_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) NOT NULL UNIQUE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used_at TIMESTAMP WITH TIME ZONE,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user login history table for security auditing
CREATE TABLE IF NOT EXISTS user_login_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    login_type VARCHAR(50) NOT NULL, -- 'password', '2fa', 'social'
    success BOOLEAN NOT NULL,
    ip_address INET,
    user_agent TEXT,
    device_info JSONB,
    location JSONB, -- Country, city, etc.
    failed_reason VARCHAR(255), -- If success = false
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_verification_codes_user_id ON user_verification_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_user_verification_codes_code ON user_verification_codes(code);
CREATE INDEX IF NOT EXISTS idx_user_verification_codes_expires ON user_verification_codes(expires_at);

CREATE INDEX IF NOT EXISTS idx_user_2fa_secrets_user_id ON user_2fa_secrets(user_id);

CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_user_sessions_refresh_token ON user_sessions(refresh_token);
CREATE INDEX IF NOT EXISTS idx_user_sessions_status ON user_sessions(status);
CREATE INDEX IF NOT EXISTS idx_user_sessions_expires ON user_sessions(expires_at);

CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX IF NOT EXISTS idx_password_reset_tokens_expires ON password_reset_tokens(expires_at);

CREATE INDEX IF NOT EXISTS idx_user_login_history_user_id ON user_login_history(user_id);
CREATE INDEX IF NOT EXISTS idx_user_login_history_created_at ON user_login_history(created_at);

-- Create cleanup function for expired tokens
CREATE OR REPLACE FUNCTION cleanup_expired_tokens()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER := 0;
BEGIN
    -- Delete expired verification codes
    DELETE FROM user_verification_codes WHERE expires_at < NOW();
    GET DIAGNOSTICS deleted_count = ROW_COUNT;

    -- Delete expired password reset tokens
    DELETE FROM password_reset_tokens WHERE expires_at < NOW();

    -- Delete expired sessions
    UPDATE user_sessions SET status = 'expired' WHERE expires_at < NOW() AND status = 'active';

    -- Keep login history for 90 days only
    DELETE FROM user_login_history WHERE created_at < NOW() - INTERVAL '90 days';

    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to cleanup locked accounts after 24 hours
CREATE OR REPLACE FUNCTION unlock_expired_accounts()
RETURNS INTEGER AS $$
DECLARE
    unlocked_count INTEGER := 0;
BEGIN
    UPDATE users
    SET login_attempts = 0, locked_until = NULL
    WHERE locked_until < NOW() AND locked_until IS NOT NULL;

    GET DIAGNOSTICS unlocked_count = ROW_COUNT;
    RETURN unlocked_count;
END;
$$ LANGUAGE plpgsql;

-- Add some sample data for testing
INSERT INTO municipalities (name, state, region, population, budget, mayor_name, coordinates, size) VALUES
('São Paulo', 'São Paulo', 'Sudeste', 12300000, 60000000000, 'Ricardo Nunes', '{"lat": -23.5505, "lng": -46.6333}', 'metropolis'),
('Rio de Janeiro', 'Rio de Janeiro', 'Sudeste', 6747815, 32000000000, 'Eduardo Paes', '{"lat": -22.9068, "lng": -43.1729}', 'metropolis'),
('Belo Horizonte', 'Minas Gerais', 'Sudeste', 2521564, 15000000000, 'Fuad Noman', '{"lat": -19.9167, "lng": -43.9345}', 'large'),
('Porto Alegre', 'Rio Grande do Sul', 'Sul', 1488252, 8500000000, 'Sebastião Melo', '{"lat": -30.0346, "lng": -51.2177}', 'large'),
('Curitiba', 'Paraná', 'Sul', 1948626, 12000000000, 'Rafael Greca', '{"lat": -25.4284, "lng": -49.2733}', 'large')
ON CONFLICT (name, state) DO NOTHING;

COMMIT;