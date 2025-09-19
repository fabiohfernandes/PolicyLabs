import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui';
import { useThemeToggle } from './ThemeProvider';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  variant?: 'icon' | 'dropdown' | 'switch';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  variant = 'icon',
  size = 'default',
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, resolvedTheme, toggleTheme, setLightTheme, setDarkTheme, setSystemTheme } = useThemeToggle();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (variant === 'icon') {
    return (
      <Button
        variant="glass"
        size={size === 'sm' ? 'icon-sm' : size === 'lg' ? 'icon-lg' : 'icon'}
        onClick={toggleTheme}
        className={cn('relative overflow-hidden', className)}
        aria-label={`Alternar para tema ${resolvedTheme === 'light' ? 'escuro' : 'claro'}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={resolvedTheme}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </motion.div>
        </AnimatePresence>
      </Button>
    );
  }

  if (variant === 'switch') {
    return (
      <div className={cn('flex items-center space-x-3', className)}>
        {showLabel && (
          <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
            Tema
          </span>
        )}
        <button
          onClick={toggleTheme}
          className={cn(
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            resolvedTheme === 'dark'
              ? 'bg-primary-600'
              : 'bg-secondary-300 dark:bg-secondary-600'
          )}
          role="switch"
          aria-checked={resolvedTheme === 'dark'}
          aria-label={`Tema ${resolvedTheme === 'dark' ? 'escuro' : 'claro'}`}
        >
          <motion.span
            className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform flex items-center justify-center',
            )}
            animate={{
              x: resolvedTheme === 'dark' ? 20 : 2,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={resolvedTheme}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.1 }}
              >
                {resolvedTheme === 'dark' ? (
                  <MoonIcon className="h-2.5 w-2.5 text-primary-600" />
                ) : (
                  <SunIcon className="h-2.5 w-2.5 text-warning-500" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.span>
        </button>
      </div>
    );
  }

  if (variant === 'dropdown') {
    return (
      <div className={cn('relative', className)}>
        <Button
          variant="glass"
          size={size}
          onClick={() => setShowDropdown(!showDropdown)}
          className="space-x-2"
          aria-label="Selecionar tema"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center"
            >
              {theme === 'system' ? (
                <ComputerDesktopIcon className="h-4 w-4" />
              ) : theme === 'dark' ? (
                <MoonIcon className="h-4 w-4" />
              ) : (
                <SunIcon className="h-4 w-4" />
              )}
            </motion.div>
          </AnimatePresence>
          {showLabel && (
            <span className="text-sm">
              {theme === 'system' ? 'Sistema' : theme === 'dark' ? 'Escuro' : 'Claro'}
            </span>
          )}
        </Button>

        <AnimatePresence>
          {showDropdown && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowDropdown(false)}
              />

              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-48 z-20 card-glass border border-white/20 dark:border-white/10 rounded-xl overflow-hidden"
              >
                <div className="p-2 space-y-1">
                  <button
                    onClick={() => {
                      setLightTheme();
                      setShowDropdown(false);
                    }}
                    className={cn(
                      'w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors',
                      theme === 'light'
                        ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    )}
                  >
                    <SunIcon className="h-4 w-4" />
                    <span>Claro</span>
                    {theme === 'light' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                      />
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setDarkTheme();
                      setShowDropdown(false);
                    }}
                    className={cn(
                      'w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors',
                      theme === 'dark'
                        ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    )}
                  >
                    <MoonIcon className="h-4 w-4" />
                    <span>Escuro</span>
                    {theme === 'dark' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                      />
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setSystemTheme();
                      setShowDropdown(false);
                    }}
                    className={cn(
                      'w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg transition-colors',
                      theme === 'system'
                        ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    )}
                  >
                    <ComputerDesktopIcon className="h-4 w-4" />
                    <span>Sistema</span>
                    {theme === 'system' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                      />
                    )}
                  </button>
                </div>

                {/* Theme preview */}
                <div className="border-t border-white/10 p-3">
                  <p className="text-xs text-secondary-500 mb-2">Prévia:</p>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 rounded bg-primary-500" />
                    <div className="w-4 h-4 rounded bg-secondary-300 dark:bg-secondary-600" />
                    <div className="w-4 h-4 rounded bg-accent-500" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return null;
}