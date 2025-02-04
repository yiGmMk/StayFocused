class AudioManager {
  private static instance: AudioManager;
  private audioCache: Map<string, HTMLAudioElement>;

  private constructor() {
    this.audioCache = new Map();
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  loadSound(url: string): HTMLAudioElement {
    if (!this.audioCache.has(url)) {
      const audio = new Audio(url);
      audio.loop = true;
      this.audioCache.set(url, audio);
    }
    return this.audioCache.get(url)!;
  }

  play(url: string, volume: number = 0.5): void {
    const audio = this.loadSound(url);
    audio.volume = volume;
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  stop(url: string): void {
    const audio = this.audioCache.get(url);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  setVolume(url: string, volume: number): void {
    const audio = this.audioCache.get(url);
    if (audio) {
      audio.volume = volume;
    }
  }

  stopAll(): void {
    this.audioCache.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }
}

export const audioManager = AudioManager.getInstance();