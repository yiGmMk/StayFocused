export type ThemeType = 'minimal-light' | 'dark' | 'nature' | 'ocean' | 'warm' | 'violet';

export interface Theme {
  id: string;
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
    muted: string;
  };
  gradients: {
    primary: string;
    secondary: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}