import React from 'react';
import { Sound } from '../types';
import { useStore } from '../store/useStore';
import { useThemeStore } from '../store/useThemeStore';
import { SoundIcon } from './SoundIcon';
import { useTranslation } from 'react-i18next';

interface Props {
  sound: Sound;
}

export const SoundButton: React.FC<Props> = ({ sound }) => {
  const { activeSounds, addSound, removeSound, setVolume } = useStore();
  const { getTheme } = useThemeStore();
  const theme = getTheme();
  const { t } = useTranslation();
  
  const isPlaying = activeSounds.has(sound.id);
  const volume = activeSounds.get(sound.id)?.volume || 0.5;

  const toggleSound = () => {
    if (isPlaying) {
      removeSound(sound.id);
    } else {
      addSound(sound);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={toggleSound}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl
          transition-all duration-200 hover:scale-105
          ${isPlaying ? theme.colors.primary + ' text-white' : theme.colors.secondary + ' ' + theme.colors.textSecondary}`}
      >
        <SoundIcon type={sound.iconType} />
      </button>
      <p className={`text-sm ${theme.colors.textSecondary}`}>
        {t(`sounds.${sound.id}`)}
      </p>
      {isPlaying && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(sound.id, parseFloat(e.target.value))}
          className="w-24"
        />
      )}
    </div>
  );
};