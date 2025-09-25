import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'policylabs-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme;
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        setThemeState(stored);
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
  }, [storageKey]);

  // Update resolved theme based on current theme and system preference
  useEffect(() => {
    const updateResolvedTheme = () => {
      let resolved: 'light' | 'dark';

      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        resolved = theme as 'light' | 'dark';
      }

      setResolvedTheme(resolved);

      // Update document class and data attribute
      const root = document.documentElement;

      // Remove existing theme classes
      root.classList.remove('light', 'dark');
      root.removeAttribute('data-theme');

      // Add new theme
      root.classList.add(resolved);
      root.setAttribute('data-theme', resolved);

      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content',
          resolved === 'dark' ? '#0f172a' : '#0ea5e9'
        );
      }

      // Update CSS variables for dynamic theming
      updateCSSVariables(resolved);
    };

    updateResolvedTheme();

    // Listen for system theme changes if using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateResolvedTheme);

      return () => {
        mediaQuery.removeEventListener('change', updateResolvedTheme);
      };
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }

    // Dispatch custom event for other components to listen to
    window.dispatchEvent(
      new CustomEvent('theme-change', {
        detail: { theme: newTheme, resolvedTheme },
      })
    );
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Update CSS custom properties for dynamic theming
function updateCSSVariables(theme: 'light' | 'dark') {
  const root = document.documentElement;

  if (theme === 'dark') {
    // Dark theme variables
    root.style.setProperty('--color-background', '#0f172a');
    root.style.setProperty('--color-surface', '#1e293b');
    root.style.setProperty('--color-surface-elevated', '#334155');
    root.style.setProperty('--color-text-primary', '#f8fafc');
    root.style.setProperty('--color-text-secondary', '#cbd5e1');
    root.style.setProperty('--color-text-tertiary', '#64748b');
    root.style.setProperty('--color-border', '#334155');
    root.style.setProperty('--color-border-focus', '#38bdf8');
    root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.1)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--glass-shadow', '0 8px 32px 0 rgba(0, 0, 0, 0.37)');
  } else {
    // Light theme variables
    root.style.setProperty('--color-background', '#ffffff');
    root.style.setProperty('--color-surface', '#f8fafc');
    root.style.setProperty('--color-surface-elevated', '#ffffff');
    root.style.setProperty('--color-text-primary', '#0f172a');
    root.style.setProperty('--color-text-secondary', '#475569');
    root.style.setProperty('--color-text-tertiary', '#94a3b8');
    root.style.setProperty('--color-border', '#e2e8f0');
    root.style.setProperty('--color-border-focus', '#0ea5e9');
    root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--glass-shadow', '0 8px 32px 0 rgba(31, 38, 135, 0.37)');
  }
}

// Theme toggle hook for easier usage
export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');
  const setSystemTheme = () => setTheme('system');

  return {
    theme,
    resolvedTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
    isLight: resolvedTheme === 'light',
    isDark: resolvedTheme === 'dark',
    isSystem: theme === 'system',
  };
}