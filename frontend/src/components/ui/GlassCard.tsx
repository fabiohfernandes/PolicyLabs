'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'elevated' | 'floating' | 'subtle';
  blur?: 'light' | 'medium' | 'heavy';
  border?: boolean;
  glow?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  style = {},
  variant = 'default',
  blur = 'medium',
  border = true,
  glow = false,
  interactive = false,
  onClick,
}) => {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          background: theme.colors.glass.background,
          boxShadow: theme.shadows.elevated,
          backdropFilter: theme.blur[blur],
        };
      case 'floating':
        return {
          background: theme.colors.glass.background,
          boxShadow: theme.shadows.floating,
          backdropFilter: theme.blur[blur],
        };
      case 'subtle':
        return {
          background: theme.colors.glass.backdrop,
          boxShadow: theme.shadows.inset,
          backdropFilter: theme.blur.light,
        };
      default:
        return {
          background: theme.colors.glass.background,
          boxShadow: theme.shadows.glass,
          backdropFilter: theme.blur[blur],
        };
    }
  };

  const variantStyles = getVariantStyles();

  const glowStyle = glow ? {
    boxShadow: `${variantStyles.boxShadow}, ${theme.shadows.glow}`,
  } : {};

  const interactiveStyle = interactive ? {
    cursor: 'pointer',
    transition: theme.animations.glass,
  } : {};

  const baseStyles: React.CSSProperties = {
    ...variantStyles,
    ...glowStyle,
    ...interactiveStyle,
    border: border ? `1px solid ${theme.colors.glass.border}` : 'none',
    borderRadius: '16px',
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };

  const hoverStyles: React.CSSProperties = interactive ? {
    transform: 'translateY(-2px)',
    boxShadow: `${theme.shadows.floating}, ${glow ? theme.shadows.glow : ''}`,
  } : {};

  return (
    <div
      className={`glass-card ${className}`}
      style={baseStyles}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (interactive) {
          Object.assign(e.currentTarget.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        if (interactive) {
          Object.assign(e.currentTarget.style, baseStyles);
        }
      }}
    >
      {/* Glass highlight effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: theme.colors.glass.highlight,
          opacity: 0.8,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};