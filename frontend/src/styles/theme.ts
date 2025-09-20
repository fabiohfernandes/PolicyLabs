/**
 * PolicyLabs APSS - Glassmorphic Theme System
 * Windows Aero-inspired design with light/dark mode support
 */

export interface Theme {
  name: string;
  colors: {
    // Background layers
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      glass: string;
      overlay: string;
    };
    // Glass morphism specific
    glass: {
      background: string;
      border: string;
      shadow: string;
      highlight: string;
      backdrop: string;
    };
    // Text colors
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      accent: string;
    };
    // Interactive elements
    interactive: {
      primary: string;
      secondary: string;
      hover: string;
      active: string;
      disabled: string;
    };
    // Status colors
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
      neutral: string;
    };
    // PolicyLabs brand colors
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      gradient: string;
    };
  };
  shadows: {
    glass: string;
    elevated: string;
    floating: string;
    inset: string;
    glow: string;
  };
  blur: {
    light: string;
    medium: string;
    heavy: string;
    backdrop: string;
  };
  gradients: {
    glass: string;
    brand: string;
    background: string;
    overlay: string;
  };
  animations: {
    glass: string;
    fade: string;
    slide: string;
    scale: string;
  };
}

// Light Theme - Professional Government Look
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    background: {
      primary: 'rgba(248, 250, 252, 0.95)',
      secondary: 'rgba(241, 245, 249, 0.9)',
      tertiary: 'rgba(226, 232, 240, 0.85)',
      glass: 'rgba(255, 255, 255, 0.1)',
      overlay: 'rgba(0, 0, 0, 0.05)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.25)',
      border: 'rgba(255, 255, 255, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.1)',
      highlight: 'rgba(255, 255, 255, 0.8)',
      backdrop: 'rgba(255, 255, 255, 0.1)',
    },
    text: {
      primary: 'rgba(15, 23, 42, 0.9)',
      secondary: 'rgba(51, 65, 85, 0.8)',
      tertiary: 'rgba(100, 116, 139, 0.7)',
      inverse: 'rgba(248, 250, 252, 0.95)',
      accent: 'rgba(59, 130, 246, 1)',
    },
    interactive: {
      primary: 'rgba(59, 130, 246, 1)',
      secondary: 'rgba(99, 102, 241, 1)',
      hover: 'rgba(37, 99, 235, 1)',
      active: 'rgba(29, 78, 216, 1)',
      disabled: 'rgba(156, 163, 175, 0.5)',
    },
    status: {
      success: 'rgba(34, 197, 94, 1)',
      warning: 'rgba(251, 191, 36, 1)',
      error: 'rgba(239, 68, 68, 1)',
      info: 'rgba(59, 130, 246, 1)',
      neutral: 'rgba(107, 114, 128, 1)',
    },
    brand: {
      primary: 'rgba(37, 99, 235, 1)',
      secondary: 'rgba(99, 102, 241, 1)',
      accent: 'rgba(34, 197, 94, 1)',
      gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 1) 0%, rgba(99, 102, 241, 1) 100%)',
    },
  },
  shadows: {
    glass: '0 8px 32px rgba(31, 38, 135, 0.37)',
    elevated: '0 4px 16px rgba(0, 0, 0, 0.1)',
    floating: '0 12px 24px rgba(0, 0, 0, 0.15)',
    inset: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  },
  blur: {
    light: 'blur(4px)',
    medium: 'blur(8px)',
    heavy: 'blur(16px)',
    backdrop: 'blur(10px)',
  },
  gradients: {
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    brand: 'linear-gradient(135deg, rgba(37, 99, 235, 1) 0%, rgba(99, 102, 241, 1) 100%)',
    background: 'linear-gradient(135deg, rgba(248, 250, 252, 1) 0%, rgba(226, 232, 240, 1) 100%)',
    overlay: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
  },
  animations: {
    glass: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fade: 'opacity 0.2s ease-in-out',
    slide: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    scale: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Dark Theme - Modern Government Dashboard
export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    background: {
      primary: 'rgba(15, 23, 42, 0.95)',
      secondary: 'rgba(30, 41, 59, 0.9)',
      tertiary: 'rgba(51, 65, 85, 0.85)',
      glass: 'rgba(0, 0, 0, 0.1)',
      overlay: 'rgba(255, 255, 255, 0.05)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: 'rgba(0, 0, 0, 0.5)',
      highlight: 'rgba(255, 255, 255, 0.1)',
      backdrop: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
      primary: 'rgba(248, 250, 252, 0.95)',
      secondary: 'rgba(226, 232, 240, 0.8)',
      tertiary: 'rgba(156, 163, 175, 0.7)',
      inverse: 'rgba(15, 23, 42, 0.9)',
      accent: 'rgba(96, 165, 250, 1)',
    },
    interactive: {
      primary: 'rgba(96, 165, 250, 1)',
      secondary: 'rgba(129, 140, 248, 1)',
      hover: 'rgba(59, 130, 246, 1)',
      active: 'rgba(37, 99, 235, 1)',
      disabled: 'rgba(75, 85, 99, 0.5)',
    },
    status: {
      success: 'rgba(52, 211, 153, 1)',
      warning: 'rgba(251, 191, 36, 1)',
      error: 'rgba(248, 113, 113, 1)',
      info: 'rgba(96, 165, 250, 1)',
      neutral: 'rgba(156, 163, 175, 1)',
    },
    brand: {
      primary: 'rgba(96, 165, 250, 1)',
      secondary: 'rgba(129, 140, 248, 1)',
      accent: 'rgba(52, 211, 153, 1)',
      gradient: 'linear-gradient(135deg, rgba(96, 165, 250, 1) 0%, rgba(129, 140, 248, 1) 100%)',
    },
  },
  shadows: {
    glass: '0 8px 32px rgba(0, 0, 0, 0.6)',
    elevated: '0 4px 16px rgba(0, 0, 0, 0.4)',
    floating: '0 12px 24px rgba(0, 0, 0, 0.5)',
    inset: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
    glow: '0 0 20px rgba(96, 165, 250, 0.4)',
  },
  blur: {
    light: 'blur(4px)',
    medium: 'blur(8px)',
    heavy: 'blur(16px)',
    backdrop: 'blur(10px)',
  },
  gradients: {
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
    brand: 'linear-gradient(135deg, rgba(96, 165, 250, 1) 0%, rgba(129, 140, 248, 1) 100%)',
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(51, 65, 85, 1) 100%)',
    overlay: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
  },
  animations: {
    glass: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fade: 'opacity 0.2s ease-in-out',
    slide: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    scale: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeName = keyof typeof themes;