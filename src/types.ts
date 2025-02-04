import { IconType } from './components/SoundIcon';

export interface Sound {
  id: string;
  name: string;
  category: string;
  iconType: IconType;
  audioUrl: string;
}

export interface ActiveSound extends Sound {
  volume: number;
  audio?: HTMLAudioElement;
}

export interface SoundMix {
  id: string;
  name: string;
  sounds: Array<{
    soundId: string;
    volume: number;
  }>;
}

export interface Theme {
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    text: string;
    textSecondary: string;
  };
}
