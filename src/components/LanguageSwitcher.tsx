import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage.startsWith('zh') ? 'en' : 'zh';
    i18n.changeLanguage(newLanguage).then(() => {
      localStorage.setItem('preferred-language', newLanguage);
      // 强制所有组件重新渲染
      window.dispatchEvent(new Event('languageChanged'));
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`p-2 rounded-md hover:bg-opacity-80 transition-colors duration-200 flex items-center gap-1`}
      aria-label="Switch Language"
    >
      <Languages className={`w-4 h-4 ${theme.colors.textPrimary}`} />
      <span className={`text-sm ${theme.colors.textPrimary}`}>
        {currentLanguage.startsWith('zh') ? 'EN' : '中文'}
      </span>
    </button>
  );
};
