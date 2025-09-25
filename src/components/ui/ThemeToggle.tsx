'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GlassButton } from './GlassButton';

// Simple icons as SVGs
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

interface ThemeToggleProps {
  variant?: 'button' | 'icon' | 'switch';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'button',
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const { isDark, toggleTheme, theme } = useTheme();

  if (variant === 'icon') {
    return (
      <GlassButton
        variant="ghost"
        size={size}
        onClick={toggleTheme}
        className={className}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
      >
        {showLabel && (isDark ? 'Modo Claro' : 'Modo Escuro')}
      </GlassButton>
    );
  }

  if (variant === 'switch') {
    return (
      <div
        className={`theme-switch ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
        }}
        onClick={toggleTheme}
      >
        {showLabel && (
          <span style={{
            color: theme.colors.text.secondary,
            fontSize: '14px',
            fontWeight: '500',
          }}>
            {isDark ? 'Escuro' : 'Claro'}
          </span>
        )}

        <div
          style={{
            width: '56px',
            height: '32px',
            borderRadius: '16px',
            background: theme.colors.glass.background,
            border: `1px solid ${theme.colors.glass.border}`,
            position: 'relative',
            transition: theme.animations.glass,
            backdropFilter: theme.blur.light,
            boxShadow: theme.shadows.inset,
          }}
        >
          {/* Switch track */}
          <div
            style={{
              position: 'absolute',
              top: '2px',
              left: isDark ? '26px' : '2px',
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              background: theme.colors.brand.gradient,
              transition: theme.animations.glass,
              boxShadow: theme.shadows.glass,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.colors.text.inverse,
            }}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <GlassButton
      variant="secondary"
      size={size}
      onClick={toggleTheme}
      className={className}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
    >
      {showLabel && (isDark ? 'Modo Claro' : 'Modo Escuro')}
    </GlassButton>
  );
};