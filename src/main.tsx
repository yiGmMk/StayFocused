import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import { useThemeStore } from './store/useThemeStore';


const LoadingFallback = () => {
  const { getTheme } = useThemeStore();
  const theme = getTheme();

  return (
    <div className={`min-h-screen ${theme.colors.background} flex items-center justify-center`}>
      <div className={`${theme.colors.textPrimary}`}>Loading...</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
