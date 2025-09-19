import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      role: 'admin' | 'prefeito' | 'secretario' | 'assessor' | 'cidadao';
      municipality?: string;
      permissions: string[];
      lastLogin?: Date;
      mfaEnabled?: boolean;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'prefeito' | 'secretario' | 'assessor' | 'cidadao';
    municipality?: string;
    permissions: string[];
    lastLogin?: Date;
    mfaEnabled?: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    municipality?: string;
    permissions: string[];
    lastLogin?: Date;
    mfaEnabled?: boolean;
  }
}