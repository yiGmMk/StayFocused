import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { themes } from '../themes';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ThemeSelector: React.FC = () => {
  const { currentThemeId, setTheme, getTheme } = useThemeStore();
  const currentTheme = getTheme();
  const { t } = useTranslation();

  return (
    <div className={`${currentTheme.colors.secondary} p-6 rounded-xl`}>
      <h2 className={`text-xl font-semibold mb-4 ${currentTheme.colors.text}`}>
        {t('themes.title')}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`relative group p-4 rounded-lg ${theme.colors.foreground} 
              ${theme.shadows.md} transition-all duration-200 hover:scale-105`}
          >
            {/* 预览区域 */}
            <div className="space-y-2">
              {/* 主色调预览 */}
              <div className={`h-2 rounded ${theme.colors.primary}`} />
              
              {/* 次色调预览 */}
              <div className={`h-2 rounded ${theme.colors.secondary}`} />
              
              {/* 强调色预览 */}
              <div className={`h-2 rounded ${theme.colors.accent}`} />
            </div>

            {/* 主题名称 */}
            <div className={`mt-2 text-sm font-medium ${theme.colors.text}`}>
              {t(`themes.${theme.id}`)}
            </div>

            {/* 选中标记 */}
            {currentThemeId === theme.id && (
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                <Check size={12} className="text-white" />
              </div>
            )}

            {/* 悬停效果 */}
            <div className={`absolute inset-0 rounded-lg ${theme.gradients.primary} 
              opacity-0 group-hover:opacity-10 transition-opacity duration-200`} />
          </button>
        ))}
      </div>
    </div>
  );
};