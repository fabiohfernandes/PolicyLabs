import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';

// Types for user and session
interface ExtendedUser extends User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'prefeito' | 'secretario' | 'assessor' | 'cidadao';
  municipality?: string;
  permissions: string[];
  lastLogin?: Date;
  mfaEnabled?: boolean;
}

interface ExtendedJWT extends JWT {
  role: string;
  municipality?: string;
  permissions: string[];
  lastLogin?: Date;
  mfaEnabled?: boolean;
}

// Security configuration
const SECURITY_CONFIG = {
  sessionMaxAge: 8 * 60 * 60, // 8 hours for government sessions
  sessionUpdateAge: 60 * 60, // 1 hour update interval
  maxAttempts: 3, // Maximum login attempts
  lockoutDuration: 15 * 60, // 15 minutes lockout
  passwordMinLength: 12,
  requireMFA: process.env.NODE_ENV === 'production',
  allowedDomains: process.env.ALLOWED_EMAIL_DOMAINS?.split(',') || [],
};

// Mock user verification (replace with actual backend integration)
async function verifyCredentials(email: string, password: string): Promise<ExtendedUser | null> {
  try {
    // TODO: Replace with actual API call to backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return null;
    }

    const userData = await response.json();

    return {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      role: userData.role,
      municipality: userData.municipality,
      permissions: userData.permissions || [],
      lastLogin: new Date(),
      mfaEnabled: userData.mfaEnabled || false,
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

// Rate limiting for login attempts
const loginAttempts = new Map<string, { count: number; lastAttempt: Date; lockedUntil?: Date }>();

function checkRateLimit(email: string): boolean {
  const now = new Date();
  const attempts = loginAttempts.get(email);

  if (!attempts) {
    loginAttempts.set(email, { count: 1, lastAttempt: now });
    return true;
  }

  // Check if account is locked
  if (attempts.lockedUntil && now < attempts.lockedUntil) {
    return false;
  }

  // Reset if lockout period has passed
  if (attempts.lockedUntil && now >= attempts.lockedUntil) {
    loginAttempts.set(email, { count: 1, lastAttempt: now });
    return true;
  }

  // Increment attempts
  attempts.count++;
  attempts.lastAttempt = now;

  // Lock account if max attempts reached
  if (attempts.count >= SECURITY_CONFIG.maxAttempts) {
    attempts.lockedUntil = new Date(now.getTime() + SECURITY_CONFIG.lockoutDuration * 1000);
    return false;
  }

  return true;
}

function resetRateLimit(email: string): void {
  loginAttempts.delete(email);
}

// Validate email domain for government users
function validateEmailDomain(email: string): boolean {
  if (SECURITY_CONFIG.allowedDomains.length === 0) {
    return true; // Allow all domains if none specified
  }

  const domain = email.split('@')[1];
  return SECURITY_CONFIG.allowedDomains.includes(domain);
}

// Audit logging function
async function auditLog(event: string, userId: string, details: any): Promise<void> {
  try {
    // TODO: Implement actual audit logging to backend
    console.log('Audit Log:', {
      timestamp: new Date().toISOString(),
      event,
      userId,
      details: {
        ...details,
        userAgent: details.userAgent,
        ip: details.ip,
      },
    });

    // In production, send to audit log service
    if (process.env.NODE_ENV === 'production') {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/audit/log`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.AUDIT_API_KEY}`,
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          event,
          userId,
          details,
        }),
      });
    }
  } catch (error) {
    console.error('Audit logging failed:', error);
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credenciais',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'seu@email.gov.br',
        },
        password: {
          label: 'Senha',
          type: 'password',
        },
        mfaCode: {
          label: 'Código 2FA (se habilitado)',
          type: 'text',
          placeholder: '000000',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email e senha são obrigatórios');
        }

        // Validate email format and domain
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(credentials.email)) {
          throw new Error('Formato de email inválido');
        }

        if (!validateEmailDomain(credentials.email)) {
          throw new Error('Domínio de email não autorizado para acesso governamental');
        }

        // Check rate limiting
        if (!checkRateLimit(credentials.email)) {
          throw new Error('Muitas tentativas de login. Tente novamente em 15 minutos.');
        }

        // Verify password strength (basic check)
        if (credentials.password.length < SECURITY_CONFIG.passwordMinLength) {
          throw new Error(`Senha deve ter pelo menos ${SECURITY_CONFIG.passwordMinLength} caracteres`);
        }

        try {
          // Verify credentials with backend
          const user = await verifyCredentials(credentials.email, credentials.password);

          if (!user) {
            throw new Error('Credenciais inválidas');
          }

          // Check MFA if enabled
          if (user.mfaEnabled && SECURITY_CONFIG.requireMFA) {
            if (!credentials.mfaCode) {
              throw new Error('Código 2FA é obrigatório');
            }

            // TODO: Verify MFA code with backend
            const mfaValid = await verifyMFACode(user.id, credentials.mfaCode);
            if (!mfaValid) {
              throw new Error('Código 2FA inválido');
            }
          }

          // Reset rate limit on successful login
          resetRateLimit(credentials.email);

          // Audit successful login
          await auditLog('login_success', user.id, {
            email: user.email,
            role: user.role,
            municipality: user.municipality,
            userAgent: req.headers?.['user-agent'],
            ip: req.headers?.['x-forwarded-for'] || req.headers?.['x-real-ip'],
          });

          return user;
        } catch (error) {
          // Audit failed login attempt
          await auditLog('login_failed', credentials.email, {
            error: error instanceof Error ? error.message : 'Unknown error',
            userAgent: req.headers?.['user-agent'],
            ip: req.headers?.['x-forwarded-for'] || req.headers?.['x-real-ip'],
          });

          throw error;
        }
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },

  session: {
    strategy: 'jwt',
    maxAge: SECURITY_CONFIG.sessionMaxAge,
    updateAge: SECURITY_CONFIG.sessionUpdateAge,
  },

  jwt: {
    maxAge: SECURITY_CONFIG.sessionMaxAge,
    // Use secure encryption for JWT
    secret: process.env.NEXTAUTH_SECRET,
  },

  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        const extendedUser = user as ExtendedUser;
        const extendedToken = token as ExtendedJWT;

        extendedToken.role = extendedUser.role;
        extendedToken.municipality = extendedUser.municipality;
        extendedToken.permissions = extendedUser.permissions;
        extendedToken.lastLogin = extendedUser.lastLogin;
        extendedToken.mfaEnabled = extendedUser.mfaEnabled;
      }

      return token;
    },

    async session({ session, token }) {
      const extendedToken = token as ExtendedJWT;

      // Send properties to the client
      session.user = {
        ...session.user,
        id: token.sub!,
        role: extendedToken.role,
        municipality: extendedToken.municipality,
        permissions: extendedToken.permissions,
        lastLogin: extendedToken.lastLogin,
        mfaEnabled: extendedToken.mfaEnabled,
      };

      return session;
    },

    async redirect({ url, baseUrl }) {
      // Ensure redirect is to the same domain
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  events: {
    async signIn(message) {
      await auditLog('session_start', message.user.id!, {
        email: message.user.email,
        account: message.account?.provider,
      });
    },

    async signOut(message) {
      if (message.token?.sub) {
        await auditLog('session_end', message.token.sub, {
          reason: 'user_logout',
        });
      }
    },

    async session(message) {
      // Track active sessions for security monitoring
      if (message.token?.sub) {
        await auditLog('session_active', message.token.sub, {
          lastActivity: new Date().toISOString(),
        });
      }
    },
  },

  // Security options
  useSecureCookies: process.env.NODE_ENV === 'production',
  cookies: {
    sessionToken: {
      name: 'policylabs.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: SECURITY_CONFIG.sessionMaxAge,
      },
    },
    callbackUrl: {
      name: 'policylabs.callback-url',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
    csrfToken: {
      name: 'policylabs.csrf-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },

  debug: process.env.NODE_ENV === 'development',
};

// Mock MFA verification function
async function verifyMFACode(userId: string, code: string): Promise<boolean> {
  try {
    // TODO: Replace with actual MFA verification
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-mfa`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, code }),
    });

    return response.ok;
  } catch (error) {
    console.error('MFA verification error:', error);
    return false;
  }
}

export default NextAuth(authOptions);