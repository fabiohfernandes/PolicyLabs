import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  'w-full rounded-xl border bg-transparent px-4 py-3 text-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: [
          'input-glass',
          'focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500',
        ],
        solid: [
          'bg-white dark:bg-secondary-800 border-secondary-300 dark:border-secondary-600',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
        ],
        outline: [
          'border-2 border-secondary-300 dark:border-secondary-600 bg-transparent',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
        ],
        ghost: [
          'border-transparent bg-secondary-100 dark:bg-secondary-800',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
        ],
      },
      inputSize: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
      state: {
        default: '',
        error: 'border-error-500 focus:border-error-500 focus:ring-error-500/20',
        success: 'border-success-500 focus:border-success-500 focus:ring-success-500/20',
        warning: 'border-warning-500 focus:border-warning-500 focus:ring-warning-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
      state: 'default',
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  error?: string;
  success?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant,
    inputSize,
    state,
    type = 'text',
    label,
    description,
    error,
    success,
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = error || state === 'error';
    const hasSuccess = success || state === 'success';
    const currentState = hasError ? 'error' : hasSuccess ? 'success' : state;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
          >
            {label}
          </label>
        )}

        {/* Input container */}
        <div className="relative">
          {/* Left addon */}
          {leftAddon && (
            <div className="absolute left-0 top-0 h-full flex items-center">
              <div className="px-3 text-sm text-secondary-500 bg-secondary-100 dark:bg-secondary-700 border-r border-secondary-300 dark:border-secondary-600 rounded-l-xl">
                {leftAddon}
              </div>
            </div>
          )}

          {/* Left icon */}
          {leftIcon && !leftAddon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400">
              {leftIcon}
            </div>
          )}

          {/* Input field */}
          <input
            type={type}
            className={cn(
              inputVariants({
                variant,
                inputSize,
                state: currentState,
                className,
              }),
              leftIcon && !leftAddon && 'pl-10',
              rightIcon && !rightAddon && 'pr-10',
              leftAddon && 'pl-20',
              rightAddon && 'pr-20'
            )}
            ref={ref}
            id={inputId}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && !rightAddon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">
              {rightIcon}
            </div>
          )}

          {/* Right addon */}
          {rightAddon && (
            <div className="absolute right-0 top-0 h-full flex items-center">
              <div className="px-3 text-sm text-secondary-500 bg-secondary-100 dark:bg-secondary-700 border-l border-secondary-300 dark:border-secondary-600 rounded-r-xl">
                {rightAddon}
              </div>
            </div>
          )}

          {/* Glassmorphic effect overlay */}
          {variant === 'default' && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
          )}
        </div>

        {/* Helper text */}
        {(description || error || success) && (
          <div className="space-y-1">
            {description && !error && !success && (
              <p className="text-xs text-secondary-500">{description}</p>
            )}
            {error && (
              <p className="text-xs text-error-600 dark:text-error-400 flex items-center gap-1">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                {error}
              </p>
            )}
            {success && (
              <p className="text-xs text-success-600 dark:text-success-400 flex items-center gap-1">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {success}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };