'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  style = {},
  onClick,
  type = 'button',
}) => {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: theme.colors.brand.gradient,
          color: theme.colors.text.inverse,
          border: `1px solid ${theme.colors.interactive.primary}`,
        };
      case 'secondary':
        return {
          background: theme.colors.glass.background,
          color: theme.colors.text.primary,
          border: `1px solid ${theme.colors.glass.border}`,
        };
      case 'success':
        return {
          background: `linear-gradient(135deg, ${theme.colors.status.success} 0%, rgba(34, 197, 94, 0.8) 100%)`,
          color: theme.colors.text.inverse,
          border: `1px solid ${theme.colors.status.success}`,
        };
      case 'warning':
        return {
          background: `linear-gradient(135deg, ${theme.colors.status.warning} 0%, rgba(251, 191, 36, 0.8) 100%)`,
          color: theme.colors.text.inverse,
          border: `1px solid ${theme.colors.status.warning}`,
        };
      case 'error':
        return {
          background: `linear-gradient(135deg, ${theme.colors.status.error} 0%, rgba(239, 68, 68, 0.8) 100%)`,
          color: theme.colors.text.inverse,
          border: `1px solid ${theme.colors.status.error}`,
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: theme.colors.text.primary,
          border: `1px solid ${theme.colors.glass.border}`,
        };
      default:
        return {
          background: theme.colors.glass.background,
          color: theme.colors.text.primary,
          border: `1px solid ${theme.colors.glass.border}`,
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '8px',
        };
      case 'lg':
        return {
          padding: '16px 32px',
          fontSize: '18px',
          borderRadius: '16px',
        };
      case 'xl':
        return {
          padding: '20px 40px',
          fontSize: '20px',
          borderRadius: '20px',
        };
      default:
        return {
          padding: '12px 24px',
          fontSize: '16px',
          borderRadius: '12px',
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const baseStyles: React.CSSProperties = {
    ...variantStyles,
    ...sizeStyles,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '600',
    fontFamily: 'inherit',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: theme.animations.glass,
    backdropFilter: theme.blur.light,
    boxShadow: theme.shadows.glass,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    position: 'relative',
    overflow: 'hidden',
    border: variantStyles.border,
    outline: 'none',
    ...style,
  };

  const hoverStyles: React.CSSProperties = {
    transform: 'translateY(-1px)',
    boxShadow: theme.shadows.elevated,
  };

  const activeStyles: React.CSSProperties = {
    transform: 'translateY(0)',
    boxShadow: theme.shadows.inset,
  };

  return (
    <button
      type={type}
      className={`glass-button ${className}`}
      style={baseStyles}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...hoverStyles });
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, baseStyles);
        }
      }}
      onMouseDown={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...activeStyles });
        }
      }}
      onMouseUp={(e) => {
        if (!disabled && !loading) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...hoverStyles });
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
          opacity: 0.6,
        }}
      />

      {/* Loading spinner */}
      {loading && (
        <div
          style={{
            width: '16px',
            height: '16px',
            border: `2px solid ${theme.colors.text.inverse}`,
            borderTop: '2px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
      )}

      {/* Icon */}
      {icon && iconPosition === 'left' && !loading && (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
      )}

      {/* Text */}
      <span>{children}</span>

      {/* Icon */}
      {icon && iconPosition === 'right' && !loading && (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
        </span>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
};