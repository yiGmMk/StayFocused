export interface Theme {
  name: string;
  id: string;
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

export const themes: Theme[] = [
  {
    id: 'minimal-light',
    name: '极简白',
    colors: {
      background: 'bg-gray-50',
      foreground: 'bg-white',
      primary: 'bg-blue-600',
      secondary: 'bg-gray-100',
      accent: 'text-blue-600',
      text: 'text-gray-700',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-500',
      border: 'border-gray-200',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      muted: 'text-gray-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-blue-500 to-blue-600',
      secondary: 'bg-gradient-to-r from-gray-100 to-gray-200',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  {
    id: 'nature',
    name: '自然绿',
    colors: {
      background: 'bg-green-50',
      foreground: 'bg-white',
      primary: 'bg-green-600',
      secondary: 'bg-green-100',
      accent: 'text-green-600',
      text: 'text-gray-700',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-500',
      border: 'border-green-200',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      muted: 'text-gray-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-green-500 to-green-600',
      secondary: 'bg-gradient-to-r from-green-100 to-green-200',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  {
    id: 'ocean',
    name: '海洋蓝',
    colors: {
      background: 'bg-blue-50',
      foreground: 'bg-white',
      primary: 'bg-blue-600',
      secondary: 'bg-blue-100',
      accent: 'text-blue-600',
      text: 'text-gray-700',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-500',
      border: 'border-blue-200',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      muted: 'text-gray-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-blue-500 to-blue-600',
      secondary: 'bg-gradient-to-r from-blue-100 to-blue-200',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  {
    id: 'warm',
    name: '温暖橙',
    colors: {
      background: 'bg-orange-50',
      foreground: 'bg-white',
      primary: 'bg-orange-500',
      secondary: 'bg-orange-100',
      accent: 'text-orange-500',
      text: 'text-gray-700',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-500',
      border: 'border-orange-200',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      muted: 'text-gray-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-orange-400 to-orange-500',
      secondary: 'bg-gradient-to-r from-orange-100 to-orange-200',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  {
    id: 'sunset',
    name: '日落',
    colors: {
      background: 'bg-orange-50',
      foreground: 'bg-white',
      primary: 'bg-orange-500',
      secondary: 'bg-orange-100',
      accent: 'text-orange-500',
      text: 'text-orange-900',
      textPrimary: 'text-orange-900',
      textSecondary: 'text-orange-600',
      border: 'border-orange-200',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      muted: 'text-gray-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-orange-400 to-orange-500',
      secondary: 'bg-gradient-to-r from-orange-100 to-orange-200',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  {
    id: 'mint',
    name: '薄荷',
    colors: {
      background: 'bg-emerald-50',
      foreground: 'bg-white',
      primary: 'bg-emerald-500',
      secondary: 'bg-emerald-100',
      accent: 'text-emerald-500',
      text: 'text-emerald-900',
      textPrimary: 'text-emerald-900',
      textSecondary: 'text-emerald-600',
      border: 'border-emerald-200',
      error: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      muted: 'text-gray-500',
    },
    gradients: {
      primary: 'bg-gradient-to-r from-emerald-400 to-emerald-500',
      secondary: 'bg-gradient-to-r from-emerald-100 to-emerald-200',
    },
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
];
