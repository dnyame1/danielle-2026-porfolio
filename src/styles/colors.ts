/**
 * Centralized Color Palette for Portfolio
 * 
 * This file contains all colors used throughout the application
 * organized by semantic meaning and theme variants.
 */

export const colors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Primary Palette — brick red / ochre (was dusty pink)
  pink: {
    25: '#FBF3EC',        // Very light warm transition color
    50: '#F7E9DD',        // Light ochre background
    100: '#EFD3B8',       // Soft tan
    200: '#E0B287',       // Mimi ochre
    300: '#C99A5B',       // Main ochre accent
    400: '#B97D3F',       // Darker ochre
    500: '#A8622F',       // Brick-ochre transition
    600: '#94402A',       // Strong brick
    700: '#8C2F1F',       // Navigation text / primary brick
    800: '#6B2317',       // Main text brick (WCAG AA)
    900: '#4A1810',       // Darkest brick
  },

  // Dark theme colors — burgundy-tinted instead of cool navy
  dark: {
    50: '#F8FAFC',        // Almost white
    100: '#F1F5F9',       // Very light gray
    200: '#E2E8F0',       // Light gray
    300: '#CBD5E1',       // Medium light gray
    400: '#94A3B8',       // Medium gray
    500: '#64748B',       // Neutral gray
    600: '#5A3A3D',       // Medium dark burgundy-gray
    700: '#43232A',       // Dark burgundy-gray
    800: '#3D1A1F',       // Very dark burgundy
    900: '#2A1014',       // Almost black, burgundy base
    950: '#1A0A0C',        // Darkest
  },

  // Semantic colors
  background: {
    light: {
      primary: '#FFFFFF',
      secondary: '#F7E9DD',
      gradient: 'linear-gradient(180deg, rgb(251 243 236) 0%, rgb(250 238 225) 50%, rgb(247 233 221) 100%)',
      gradientEnd: 'rgb(247 233 221)', // End color of the main gradient for seamless transitions
      overlay: 'rgba(255, 255, 255, 0.5)',
      // Section-specific gradients - mostly white with very light ochre brush at edges
      sections: {
        about: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(253 247 240) 30%, #FBF3EC 100%)',
        skills: 'linear-gradient(180deg, rgb(251 243 236) 0%, rgb(253 248 242) 30%, rgb(253 248 242) 70%, rgb(255 255 255) 100%)',
        projects: 'linear-gradient(180deg, rgb(251 243 236) 0%, rgb(255 255 255) 15%, rgb(255 255 255) 85%, rgb(251 243 236) 100%)',
        experience: 'linear-gradient(180deg, rgb(251 243 236) 0%, rgb(253 248 242) 25%, rgb(253 248 242) 75%, rgb(251 243 236) 100%)',
        certifications: 'linear-gradient(180deg, rgb(255 255 255) 0%, rgb(255 255 255) 60%, rgb(253 248 242) 100%)',
      },
    },
    dark: {
      primary: '#2A1014',
      secondary: '#3D1A1F',
      gradient: '#220C0F',
      gradientEnd: '#220C0F', // Consistent dark burgundy background for seamless transitions
      overlay: 'rgba(0, 0, 0, 0.7)',
      // Dark mode sections maintain consistent dark burgundy background
      sections: {
        about: '#220C0F',
        skills: '#220C0F',
        projects: '#220C0F',
        experience: '#220C0F',
        certifications: '#220C0F',
      },
    },
  },

  // Text colors
  text: {
    light: {
      primary: '#1F2937',     // rgb(31, 41, 55)
      secondary: '#4B5563',   // rgb(75, 85, 99)
      tertiary: '#6B7280',    // rgb(107, 114, 128)
      accent: '#6B2317',      // Brick text
      pink: '#8C2F1F',        // Primary brick
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#E0B287',
      tertiary: '#C99A5B',
      accent: '#D4A017',
      pink: '#C99A5B',
    },
  },

  // Interactive elements
  interactive: {
    light: {
      primary: 'rgba(201, 154, 91, 0.1)',
      hover: 'rgba(201, 154, 91, 0.2)',
      active: '#C99A5B',
      focus: 'rgba(201, 154, 91, 0.3)',
    },
    dark: {
      primary: 'rgba(201, 154, 91, 0.1)',
      hover: 'rgba(201, 154, 91, 0.2)',
      active: '#C99A5B',
      focus: 'rgba(201, 154, 91, 0.3)',
    },
  },

  // Navigation specific
  navigation: {
    light: {
      background: 'rgba(247, 233, 221, 0.4)',
      backgroundScrolled: 'rgba(247, 233, 221, 0.6)',
      border: 'rgba(201, 154, 91, 0.15)',
      borderScrolled: 'rgba(201, 154, 91, 0.2)',
      shadow: 'rgba(140, 47, 31, 0.08)',
      shadowScrolled: 'rgba(140, 47, 31, 0.12)',
      mobile: 'rgba(251, 243, 236, 0.95)',
    },
    dark: {
      background: 'rgba(34, 12, 15, 0.4)',
      backgroundScrolled: 'rgba(34, 12, 15, 0.6)',
      border: 'rgba(201, 154, 91, 0.15)',
      borderScrolled: 'rgba(201, 154, 91, 0.22)',
      shadow: 'rgba(0, 0, 0, 0.2)',
      shadowScrolled: 'rgba(0, 0, 0, 0.3)',
      mobile: 'rgba(34, 12, 15, 0.95)',
    },
  },

  // Button variants
  button: {
    primary: {
      light: {
        background: '#C99A5B',
        text: '#FFFFFF',
        hover: '#B97D3F',
        shadow: 'rgba(201, 154, 91, 0.3)',
      },
      dark: {
        background: '#C99A5B',
        text: '#2A1014',
        hover: '#E0B287',
        shadow: 'rgba(201, 154, 91, 0.4)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(255, 255, 255, 0.8)',
        text: '#1F2937',
        border: '#C99A5B',
        hover: '#F7E9DD',
      },
      dark: {
        background: 'rgba(31, 41, 55, 0.9)',
        text: '#FFFFFF',
        border: '#374151',
        hover: 'rgba(201, 154, 91, 0.1)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: '#A8622F',
        border: '#C99A5B',
        hover: '#F7E9DD',
      },
      dark: {
        background: '#1F2937',
        text: '#C99A5B',
        border: '#B97D3F',
        hover: 'rgba(201, 154, 91, 0.1)',
      },
    },
  },

  // Card colors
  card: {
    light: {
      background: '#FFFFFF',
      border: 'rgba(201, 154, 91, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
      background: '#1F2937',
      border: 'rgba(55, 65, 81, 0.3)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },

  // Special effects
  effects: {
    glow: 'rgba(212, 160, 23, 0.3)',
    dropShadow: 'rgba(201, 154, 91, 0.3)',
    textShadow: 'rgba(0, 0, 0, 0.1)',
    blur: 'rgba(255, 255, 255, 0.1)',
  },

  // Utility colors
  utility: {
    success: '#2F5233',
    warning: '#D4A017',
    error: '#A8262A',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Special colors
  special: {
    dragMe: '#D4A017',       // Kente gold for drag me star
    aurora: {
      dark: '#C99A5B',       // Ochre aurora for dark mode
      light: {
        1: '#EFD3B8',        // Light ochre aurora stop 1
        2: '#E0B287',        // Light ochre aurora stop 2
        3: '#F7E9DD',        // Light ochre aurora stop 3
      }
    },
    kente: {
      gold: '#D4A017',
      green: '#2F5233',
      red: '#A8262A',
    }
  },
} as const;

// Type definitions for better TypeScript support
type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

// Helper function to get theme-specific colors
export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});