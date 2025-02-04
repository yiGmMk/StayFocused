import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const { t } = useTranslation();

  return (
    <div className={`min-h-screen ${theme.colors.background}`}>
      {/* 导航栏 */}
      <nav className={`${theme.colors.foreground} ${theme.shadows.sm} border-b ${theme.colors.border}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-12 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center space-x-1.5 mr-4">
                  <Brain className={`w-4 h-4 ${theme.colors.accent}`} />
                  <span className={`text-sm font-semibold tracking-wide ${theme.colors.accent}`}>
                    {t('app.title')}
                  </span>
                </div>
                <div className={`text-[10px] px-2 py-0.5 rounded-full ${theme.colors.secondary} ${theme.colors.textSecondary}`}>
                  {t('app.description')}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* 页脚 */}
      <footer className={`${theme.colors.foreground} border-t ${theme.colors.border} mt-auto`}>
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-sm ${theme.colors.textSecondary} hover:${theme.colors.textPrimary}`}
          >
            鲁ICP备2022004448号-1
          </a>
        </div>
      </footer>
    </div>
  );
};