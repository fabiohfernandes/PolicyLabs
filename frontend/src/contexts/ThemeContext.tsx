'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, ThemeName, themes } from '@/styles/theme';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  toggleTheme: () => void;
  setTheme: (themeName: ThemeName) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default theme instead of throwing error during development
    console.warn('useTheme must be used within a ThemeProvider. Using default theme.');
    return {
      theme: themes.light,
      themeName: 'light' as ThemeName,
      toggleTheme: () => {},
      setTheme: () => {},
      isDark: false,
    };
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('policylabs-theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('policylabs-theme', themeName);

      // Update CSS custom properties
      const root = document.documentElement;
      const theme = themes[themeName];

      // Set theme colors as CSS custom properties
      root.style.setProperty('--color-bg-primary', theme.colors.background.primary);
      root.style.setProperty('--color-bg-secondary', theme.colors.background.secondary);
      root.style.setProperty('--color-bg-tertiary', theme.colors.background.tertiary);
      root.style.setProperty('--color-glass-bg', theme.colors.glass.background);
      root.style.setProperty('--color-glass-border', theme.colors.glass.border);
      root.style.setProperty('--color-text-primary', theme.colors.text.primary);
      root.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
      root.style.setProperty('--color-brand-primary', theme.colors.brand.primary);
      root.style.setProperty('--shadow-glass', theme.shadows.glass);
      root.style.setProperty('--blur-backdrop', theme.blur.backdrop);
      root.style.setProperty('--gradient-glass', theme.gradients.glass);
      root.style.setProperty('--gradient-brand', theme.gradients.brand);

      // Set data attribute for CSS targeting
      root.setAttribute('data-theme', themeName);
    }
  }, [themeName, mounted]);

  const toggleTheme = () => {
    setThemeName(current => current === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newTheme: ThemeName) => {
    setThemeName(newTheme);
  };

  const theme = themes[themeName];
  const isDark = themeName === 'dark';

  // Prevent hydration mismatch - use default theme until mounted
  const currentTheme = mounted ? theme : themes.light;
  const currentThemeName = mounted ? themeName : 'light';

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        themeName: currentThemeName,
        toggleTheme,
        setTheme,
        isDark: mounted ? isDark : false,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};