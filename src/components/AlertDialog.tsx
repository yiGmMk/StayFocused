import React from 'react';
import { X } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  const { getTheme } = useThemeStore();
  const theme = getTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div
        className={`${theme.colors.foreground} rounded-lg p-6 shadow-xl max-w-sm w-full mx-4 relative z-10 transform transition-all`}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-lg font-semibold ${theme.colors.text}`}>
            {title}
          </h3>
          <button
            onClick={onClose}
            className={`${theme.colors.text} hover:opacity-70 rounded-full p-1`}
          >
            <X size={20} />
          </button>
        </div>
        <p className={`${theme.colors.textSecondary} mb-6`}>{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={`${theme.colors.primary} text-white px-4 py-2 rounded-lg hover:opacity-90`}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
};
