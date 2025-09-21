import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button' | 'switch';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'md',
  variant = 'icon',
  className = ''
}) => {
  const [mounted, setMounted] = useState(false);

  // Always call useTheme to maintain consistent hook order
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`
          relative inline-flex items-center justify-center rounded-xl transition-all duration-300
          w-10 h-10 p-2
          bg-white/20 backdrop-blur-md border border-white/30
          ${className}
        `}
        disabled
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </button>
    );
  }

  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-3'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  if (variant === 'switch') {
    return (
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex items-center justify-center rounded-full transition-all duration-300
          ${sizeClasses[size]}
          bg-white/20 dark:bg-black/20
          border border-white/30 dark:border-white/10
          backdrop-blur-md
          hover:bg-white/30 dark:hover:bg-black/30
          hover:scale-105
          active:scale-95
          ${className}
        `}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      >
        <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
          <Sun
            className={`
              absolute transition-all duration-300 text-yellow-500
              ${iconSizeClasses[size]}
              ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}
            `}
          />
          <Moon
            className={`
              absolute transition-all duration-300 text-blue-300
              ${iconSizeClasses[size]}
              ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}
            `}
          />
        </div>
      </button>
    );
  }

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={`
          inline-flex items-center space-x-2 px-4 py-2 rounded-xl
          bg-white/20 dark:bg-black/20
          border border-white/30 dark:border-white/10
          backdrop-blur-md
          hover:bg-white/30 dark:hover:bg-black/30
          transition-all duration-300
          text-sm font-medium
          text-gray-700 dark:text-gray-200
          hover:scale-105
          active:scale-95
          ${className}
        `}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      >
        {isDark ? (
          <>
            <Sun className="w-4 h-4 text-yellow-500" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-blue-500" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  // Default icon variant
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center rounded-xl transition-all duration-300
        ${sizeClasses[size]}
        bg-white/20 dark:bg-black/20
        border border-white/30 dark:border-white/10
        backdrop-blur-md
        hover:bg-white/30 dark:hover:bg-black/30
        hover:scale-105
        active:scale-95
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="relative overflow-hidden w-full h-full flex items-center justify-center">
        <Sun
          className={`
            absolute transition-all duration-300 text-yellow-500
            ${iconSizeClasses[size]}
            ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}
          `}
        />
        <Moon
          className={`
            absolute transition-all duration-300 text-blue-300
            ${iconSizeClasses[size]}
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}
          `}
        />
      </div>
    </button>
  );
};