export interface Sound {
  id: string;
  name: string;
  category: string;
  audioUrl: string;
}

export interface SoundMix {
  id: string;
  name: string;
  volumes: Record<string, number>;
}