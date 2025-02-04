import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { themes } from '../themes';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const ThemeToggle: React.FC = () => {
  const { currentThemeId, setTheme, getTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTheme = getTheme();

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  // 键盘快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg ${currentTheme.colors.foreground} 
          ${currentTheme.shadows.md} transition-all duration-200 
          hover:scale-105 focus:outline-none focus:ring-2 
          focus:ring-offset-2 focus:ring-offset-${currentTheme.colors.background} 
          focus:ring-${currentTheme.colors.primary}`}
        aria-label="切换主题"
      >
        <Palette className={`w-5 h-5 ${currentTheme.colors.text}`} />
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-lg ${currentTheme.colors.foreground} 
          ${currentTheme.shadows.lg} py-2 z-50`}
        >
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                setTheme(theme.id);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors duration-200
                ${currentThemeId === theme.id ? theme.colors.primary + ' text-white' : theme.colors.text}
                hover:${theme.colors.secondary} focus:outline-none focus:${theme.colors.secondary}`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${theme.colors.primary}`} />
                <span>{theme.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
