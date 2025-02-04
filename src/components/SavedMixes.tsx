import React, { useState } from 'react';
import { Save, List, Music, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useThemeStore } from '../store/useThemeStore';
import { useTranslation } from 'react-i18next';

export const SavedMixes: React.FC = () => {
  const { savedMixes, saveMix, loadMix, deleteMix } = useStore();
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const { t } = useTranslation();
  const [newMixName, setNewMixName] = useState('');
  const [isNaming, setIsNaming] = useState(false);
  const [selectedMixIndex, setSelectedMixIndex] = useState(null);

  const handleSave = () => {
    if (newMixName.trim()) {
      saveMix(newMixName);
      setNewMixName('');
      setIsNaming(false);
    }
  };

  const handleMixSelect = (mix) => {
    loadMix(mix);
    setSelectedMixIndex(savedMixes.indexOf(mix));
  };

  const handleMixDelete = (index) => {
    deleteMix(index);
    setSelectedMixIndex(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          value={newMixName}
          onChange={(e) => setNewMixName(e.target.value)}
          placeholder={t('mixes.namePlaceholder')}
          className={`w-full px-3 py-2 rounded-lg 
            ${theme.colors.secondary} 
            placeholder:${theme.colors.textSecondary}
            focus:outline-none focus:ring-2 
            focus:${theme.colors.accent.replace('text-', 'ring-')}
            transition-shadow duration-200`}
        />
        <button
          onClick={handleSave}
          className={`w-full px-4 py-2 rounded-lg
            flex items-center justify-center space-x-2
            ${theme.colors.accent.replace('text-', 'bg-')}
            text-white font-medium
            hover:opacity-90 transition-opacity duration-200`}
        >
          <Save size={16} />
          <span>{t('mixes.save')}</span>
        </button>
      </div>

      <div className={`rounded-xl ${theme.colors.secondary} p-4`}>
        {savedMixes.length > 0 && (
          <div className="space-y-2">
            <h3 className={`flex items-center space-x-2 text-lg font-semibold ${theme.colors.text}`}>
              <List size={20} />
              <span>{t('mixes.saved')}</span>
            </h3>
            <div className="flex flex-col space-y-2">
              {savedMixes.map((mix, index) => (
                <div
                  key={index}
                  onClick={() => handleMixSelect(mix)}
                  className={`
                    group
                    p-3 rounded-lg cursor-pointer
                    transition-all duration-300 ease-in-out
                    ${selectedMixIndex === index 
                      ? `${theme.colors.accent} bg-opacity-10 ring-2 ring-offset-2 ${theme.colors.accent.replace('text-', 'ring-')} scale-[1.02]` 
                      : `${theme.colors.secondary} hover:bg-opacity-70`
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        selectedMixIndex === index 
                          ? theme.colors.accent.replace('text-', 'bg-') 
                          : theme.colors.primary
                      }`}>
                        <Music className={`w-4 h-4 ${
                          selectedMixIndex === index 
                            ? 'text-white' 
                            : 'text-white'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-sm font-medium ${theme.colors.textPrimary}`}>
                          {mix.name || t('mixes.mix') + ` ${index + 1}`}
                        </h3>
                        <p className={`text-xs ${theme.colors.textSecondary} mt-0.5`}>
                          {mix.volumes && Object.entries(mix.volumes)
                            .filter(([_, volume]) => volume > 0)
                            .map(([soundId]) => t(`sounds.${soundId}`))
                            .join(' · ') || t('mixes.noSounds')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMixDelete(index);
                        }}
                        className={`p-1.5 rounded-full 
                          opacity-0 group-hover:opacity-100
                          hover:${theme.colors.secondary} 
                          transition-all duration-200
                          ${theme.colors.textSecondary}
                          hover:${theme.colors.textPrimary}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};