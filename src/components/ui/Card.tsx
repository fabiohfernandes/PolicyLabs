import { forwardRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  'rounded-2xl transition-all duration-300 relative overflow-hidden',
  {
    variants: {
      variant: {
        default: [
          'card-glass',
          'hover:shadow-glass-lg hover:-translate-y-1',
        ],
        solid: [
          'bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 shadow-lg',
          'hover:shadow-xl hover:-translate-y-1',
        ],
        outline: [
          'border-2 border-secondary-200 dark:border-secondary-700 bg-transparent',
          'hover:border-primary-300 dark:hover:border-primary-600',
        ],
        ghost: [
          'bg-transparent',
          'hover:bg-secondary-50 dark:hover:bg-secondary-900/50',
        ],
        elevated: [
          'card-glass shadow-glass-lg',
          'hover:shadow-glass-xl hover:-translate-y-2',
        ],
        primary: [
          'glass-strong bg-gradient-to-br from-primary-50/50 to-primary-100/50',
          'dark:from-primary-950/50 dark:to-primary-900/50',
          'border-primary-200/40 dark:border-primary-700/40',
          'hover:from-primary-100/60 hover:to-primary-200/60',
          'dark:hover:from-primary-900/60 dark:hover:to-primary-800/60',
          'hover:shadow-glass-lg hover:-translate-y-1',
        ],
        success: [
          'glass-strong bg-gradient-to-br from-success-50/50 to-success-100/50',
          'dark:from-success-950/50 dark:to-success-900/50',
          'border-success-200/40 dark:border-success-700/40',
          'hover:shadow-glass-lg hover:-translate-y-1',
        ],
        warning: [
          'glass-strong bg-gradient-to-br from-warning-50/50 to-warning-100/50',
          'dark:from-warning-950/50 dark:to-warning-900/50',
          'border-warning-200/40 dark:border-warning-700/40',
          'hover:shadow-glass-lg hover:-translate-y-1',
        ],
        error: [
          'glass-strong bg-gradient-to-br from-error-50/50 to-error-100/50',
          'dark:from-error-950/50 dark:to-error-900/50',
          'border-error-200/40 dark:border-error-700/40',
          'hover:shadow-glass-lg hover:-translate-y-1',
        ],
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-12',
      },
      hover: {
        none: '',
        subtle: 'hover:scale-[1.01]',
        lift: 'hover:scale-[1.02]',
        float: 'hover:scale-105',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      hover: 'subtle',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  glow?: boolean;
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant,
    padding,
    hover,
    glow = false,
    interactive = false,
    children,
    ...props
  }, ref) => {
    return (
      <div
        className={cn(
          cardVariants({ variant, padding, hover, className }),
          glow && 'animate-glow',
          interactive && 'cursor-pointer focus-visible-ring'
        )}
        ref={ref}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      >
        {/* Glassmorphic shine effect */}
        {(variant === 'default' || variant === 'elevated' || variant?.includes('primary')) && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
        )}

        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Glow effect for special cards */}
        {glow && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-xl -z-10" />
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card composition components
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 pb-4', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight text-secondary-900 dark:text-secondary-50', className)}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-secondary-600 dark:text-secondary-400', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-secondary-700 dark:text-secondary-300', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants
};