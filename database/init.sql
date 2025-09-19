-- PolicyLabs Database Initialization
-- Create database and basic setup

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create schemas
CREATE SCHEMA IF NOT EXISTS public;
CREATE SCHEMA IF NOT EXISTS audit;

-- Create enum types
CREATE TYPE user_role AS ENUM ('admin', 'mayor', 'secretary', 'citizen', 'analyst');
CREATE TYPE municipality_size AS ENUM ('small', 'medium', 'large', 'metropolis');
CREATE TYPE policy_status AS ENUM ('draft', 'simulation', 'approved', 'implementing', 'completed', 'cancelled');
CREATE TYPE policy_category AS ENUM ('education', 'health', 'infrastructure', 'environment', 'social', 'economic', 'security', 'transport');

-- Create tables

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'citizen',
    municipality_id UUID,
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Municipalities table
CREATE TABLE municipalities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    region VARCHAR(100),
    population INTEGER,
    area_km2 DECIMAL(10,2),
    budget BIGINT,
    gdp_per_capita DECIMAL(12,2),
    size municipality_size,
    mayor_name VARCHAR(255),
    coordinates JSONB,
    demographics JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Policies table
CREATE TABLE policies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    description TEXT,
    category policy_category NOT NULL,
    status policy_status DEFAULT 'draft',
    municipality_id UUID NOT NULL REFERENCES municipalities(id),
    created_by UUID NOT NULL REFERENCES users(id),
    budget BIGINT,
    timeline_months INTEGER,
    beneficiaries INTEGER,
    success_rate DECIMAL(5,2),
    roi_5_years DECIMAL(8,2),
    policy_dna JSONB,
    simulation_results JSONB,
    implementation_data JSONB,
    is_template BOOLEAN DEFAULT FALSE,
    template_usage_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Policy templates table
CREATE TABLE policy_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(500) NOT NULL,
    description TEXT,
    category policy_category NOT NULL,
    target_population_min INTEGER,
    target_population_max INTEGER,
    average_budget BIGINT,
    average_timeline_months INTEGER,
    success_rate DECIMAL(5,2),
    template_data JSONB NOT NULL,
    usage_count INTEGER DEFAULT 0,
    is_premium BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Simulations table
CREATE TABLE simulations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    policy_id UUID NOT NULL REFERENCES policies(id),
    user_id UUID NOT NULL REFERENCES users(id),
    input_parameters JSONB NOT NULL,
    results JSONB NOT NULL,
    confidence_score DECIMAL(3,2),
    duration_seconds DECIMAL(8,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Citizen engagement table
CREATE TABLE citizen_engagements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    policy_id UUID NOT NULL REFERENCES policies(id),
    user_id UUID NOT NULL REFERENCES users(id),
    engagement_type VARCHAR(50) NOT NULL, -- 'vote', 'comment', 'suggestion'
    vote_value INTEGER, -- 1 for like, -1 for dislike, 0 for neutral
    comment TEXT,
    suggestion TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Knowledge base table (for RAG)
CREATE TABLE knowledge_base (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    category policy_category,
    municipality_id UUID REFERENCES municipalities(id),
    source_type VARCHAR(100), -- 'policy', 'law', 'case_study', 'research'
    source_url VARCHAR(1000),
    embedding_id VARCHAR(255), -- Reference to Weaviate object
    metadata JSONB,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    municipality_id UUID NOT NULL REFERENCES municipalities(id),
    plan_name VARCHAR(100) NOT NULL, -- 'free', 'starter', 'professional', 'enterprise'
    monthly_price DECIMAL(10,2),
    features JSONB NOT NULL,
    limits JSONB NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    starts_at TIMESTAMP WITH TIME ZONE NOT NULL,
    ends_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_municipality ON users(municipality_id);
CREATE INDEX idx_municipalities_name ON municipalities(name);
CREATE INDEX idx_municipalities_state ON municipalities(state);
CREATE INDEX idx_policies_municipality ON policies(municipality_id);
CREATE INDEX idx_policies_category ON policies(category);
CREATE INDEX idx_policies_status ON policies(status);
CREATE INDEX idx_policy_templates_category ON policy_templates(category);
CREATE INDEX idx_simulations_policy ON simulations(policy_id);
CREATE INDEX idx_citizen_engagements_policy ON citizen_engagements(policy_id);
CREATE INDEX idx_knowledge_base_category ON knowledge_base(category);
CREATE INDEX idx_knowledge_base_municipality ON knowledge_base(municipality_id);
CREATE INDEX idx_subscriptions_municipality ON subscriptions(municipality_id);

-- Create GIN indexes for JSONB columns
CREATE INDEX idx_municipalities_coordinates ON municipalities USING GIN(coordinates);
CREATE INDEX idx_policies_policy_dna ON policies USING GIN(policy_dna);
CREATE INDEX idx_knowledge_base_metadata ON knowledge_base USING GIN(metadata);

-- Create full-text search indexes
CREATE INDEX idx_policies_title_search ON policies USING GIN(to_tsvector('portuguese', title));
CREATE INDEX idx_knowledge_base_content_search ON knowledge_base USING GIN(to_tsvector('portuguese', content));

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_municipalities_updated_at BEFORE UPDATE ON municipalities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_policies_updated_at BEFORE UPDATE ON policies FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_policy_templates_updated_at BEFORE UPDATE ON policy_templates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_knowledge_base_updated_at BEFORE UPDATE ON knowledge_base FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert initial data
INSERT INTO municipalities (name, state, region, population, budget, mayor_name, coordinates) VALUES
('Joinville', 'Santa Catarina', 'Sul', 597658, 4500000000, 'Adriano Silva', '{"lat": -26.3044, "lng": -48.8487}'),
('Blumenau', 'Santa Catarina', 'Sul', 361855, 2800000000, 'Mário Hildebrandt', '{"lat": -26.9194, "lng": -49.0661}'),
('Florianópolis', 'Santa Catarina', 'Sul', 508826, 3200000000, 'Topázio Neto', '{"lat": -27.5954, "lng": -48.5480}');

-- Create admin user (password: admin123)
INSERT INTO users (email, password_hash, full_name, role, is_active, is_verified) VALUES
('admin@policylabs.ai', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewEOyQiMdZX1EYeu', 'PolicyLabs Admin', 'admin', TRUE, TRUE);

COMMIT;