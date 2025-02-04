import { Theme } from '../types/theme';

export const themes: Theme[] = [
  {
    id: 'light',
    name: 'Light',
    colors: {
      background: 'bg-gray-50',
      foreground: 'bg-white',
      primary: 'bg-purple-600',
      secondary: 'bg-purple-100',
      accent: 'bg-purple-500',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-200'
    }
  },
  {
    id: 'dark',
    name: 'Dark',
    colors: {
      background: 'bg-gray-900',
      foreground: 'bg-gray-800',
      primary: 'bg-purple-500',
      secondary: 'bg-purple-900',
      accent: 'bg-purple-400',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      border: 'border-gray-700'
    }
  },
  {
    id: 'nature',
    name: 'Nature',
    colors: {
      background: 'bg-green-50',
      foreground: 'bg-white',
      primary: 'bg-green-600',
      secondary: 'bg-green-100',
      accent: 'bg-green-500',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-green-200'
    }
  },
  {
    id: 'ocean',
    name: 'Ocean',
    colors: {
      background: 'bg-blue-50',
      foreground: 'bg-white',
      primary: 'bg-blue-600',
      secondary: 'bg-blue-100',
      accent: 'bg-blue-500',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-blue-200'
    }
  }
];