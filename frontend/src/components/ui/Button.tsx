import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25',
          'hover:from-primary-600 hover:to-primary-700 hover:shadow-xl hover:shadow-primary-500/30',
          'active:scale-95 active:shadow-lg',
          'dark:from-primary-400 dark:to-primary-500 dark:text-primary-950',
        ],
        secondary: [
          'glass border border-white/20 text-secondary-700 dark:text-secondary-200',
          'hover:bg-white/20 hover:scale-105 hover:shadow-glass-lg',
          'active:scale-95',
        ],
        glass: [
          'glass text-primary-600 dark:text-primary-400',
          'hover:bg-white/20 hover:scale-105 hover:shadow-glass-lg',
          'active:scale-95',
          'border-primary-200/30 dark:border-primary-400/30',
        ],
        'glass-primary': [
          'glass-strong text-primary-600 dark:text-primary-400',
          'bg-gradient-to-r from-primary-50/50 to-primary-100/50',
          'dark:from-primary-950/50 dark:to-primary-900/50',
          'border-primary-300/40 dark:border-primary-600/40',
          'hover:from-primary-100/60 hover:to-primary-200/60',
          'dark:hover:from-primary-900/60 dark:hover:to-primary-800/60',
          'hover:scale-105 hover:shadow-glass-lg',
          'active:scale-95',
        ],
        outline: [
          'border-2 border-primary-500 text-primary-500 bg-transparent',
          'hover:bg-primary-50 hover:border-primary-600',
          'dark:hover:bg-primary-950/20 dark:border-primary-400',
          'active:scale-95',
        ],
        ghost: [
          'text-secondary-700 dark:text-secondary-200 bg-transparent',
          'hover:bg-secondary-100 dark:hover:bg-secondary-800',
          'active:scale-95',
        ],
        link: [
          'text-primary-600 dark:text-primary-400 underline-offset-4',
          'hover:underline active:scale-95',
        ],
        destructive: [
          'bg-gradient-to-r from-error-500 to-error-600 text-white shadow-lg shadow-error-500/25',
          'hover:from-error-600 hover:to-error-700 hover:shadow-xl hover:shadow-error-500/30',
          'active:scale-95',
        ],
        success: [
          'bg-gradient-to-r from-success-500 to-success-600 text-white shadow-lg shadow-success-500/25',
          'hover:from-success-600 hover:to-success-700 hover:shadow-xl hover:shadow-success-500/30',
          'active:scale-95',
        ],
        warning: [
          'bg-gradient-to-r from-warning-500 to-warning-600 text-white shadow-lg shadow-warning-500/25',
          'hover:from-warning-600 hover:to-warning-700 hover:shadow-xl hover:shadow-warning-500/30',
          'active:scale-95',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    fullWidth,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-transparent border-t-current" />
        )}

        {/* Left icon */}
        {leftIcon && !loading && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}

        {/* Button content */}
        {children && (
          <span className={cn(loading && 'opacity-70')}>{children}</span>
        )}

        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}

        {/* Glassmorphic shine effect */}
        {(variant === 'glass' || variant === 'glass-primary' || variant === 'secondary') && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
        )}

        {/* Ripple effect container for primary buttons */}
        {variant === 'primary' && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full" />
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };