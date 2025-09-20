'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { GlassCard } from '@/components/ui/GlassCard';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'PolicyLabs APSS',
  showHeader = true,
  showSidebar = false,
  className = '',
}) => {
  const { theme } = useTheme();

  // Background gradient style
  const backgroundStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: theme.gradients.background,
    position: 'relative',
    overflow: 'hidden',
  };

  // Animated background elements
  const backgroundDecorations = (
    <>
      {/* Floating glass orbs */}
      <div
        style={{
          position: 'fixed',
          top: '10%',
          right: '20%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: theme.gradients.glass,
          filter: theme.blur.heavy,
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '20%',
          left: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: theme.gradients.glass,
          filter: theme.blur.heavy,
          opacity: 0.2,
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '60%',
          right: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: theme.colors.brand.gradient,
          filter: theme.blur.heavy,
          opacity: 0.1,
          animation: 'float 10s ease-in-out infinite',
          zIndex: 0,
        }}
      />
    </>
  );

  return (
    <div style={backgroundStyle} className={className}>
      {/* Background decorations */}
      {backgroundDecorations}

      {/* Header */}
      {showHeader && (
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            padding: '16px 24px',
          }}
        >
          <GlassCard
            variant="elevated"
            className="flex items-center justify-between"
            style={{
              padding: '16px 24px',
            }}
          >
            {/* Logo and Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: theme.colors.brand.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.text.inverse,
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              >
                🏛️
              </div>
              <div>
                <h1
                  style={{
                    color: theme.colors.text.primary,
                    fontSize: '24px',
                    fontWeight: '700',
                    margin: 0,
                  }}
                >
                  {title}
                </h1>
                <p
                  style={{
                    color: theme.colors.text.secondary,
                    fontSize: '14px',
                    margin: 0,
                  }}
                >
                  Onde a Política Encontra a Precisão
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ThemeToggle variant="switch" showLabel={false} />

              {/* Notification icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: theme.colors.glass.background,
                  border: `1px solid ${theme.colors.glass.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.text.secondary,
                  cursor: 'pointer',
                  transition: theme.animations.glass,
                }}
              >
                🔔
              </div>

              {/* User avatar */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: theme.colors.brand.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.text.inverse,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                👤
              </div>
            </div>
          </GlassCard>
        </header>
      )}

      {/* Main Content */}
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          padding: showHeader ? '24px' : '0',
          paddingTop: showHeader ? '0' : '24px',
        }}
      >
        {children}
      </main>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${theme.colors.background.secondary};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.glass.background};
          border-radius: 4px;
          border: 1px solid ${theme.colors.glass.border};
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.interactive.hover};
        }

        /* Focus styles */
        *:focus {
          outline: 2px solid ${theme.colors.brand.primary};
          outline-offset: 2px;
        }

        /* Glass card hover effects */
        .glass-card:hover {
          transform: translateY(-2px);
        }

        /* Button ripple effect */
        .glass-button:active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};