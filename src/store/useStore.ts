import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Sound, SoundMix } from '../types';
import { sounds } from '../data/sounds';

interface State {
  activeSounds: Map<string, { volume: number; audio: HTMLAudioElement }>;
  savedMixes: SoundMix[];
  timerMinutes: number;
  isTimerRunning: boolean;
  addSound: (sound: Sound) => void;
  removeSound: (soundId: string) => void;
  setVolume: (soundId: string, volume: number) => void;
  saveMix: (name: string) => void;
  loadMix: (mix: SoundMix) => void;
  deleteMix: (index: number) => void;
  setTimer: (minutes: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
}

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      activeSounds: new Map(),
      savedMixes: [],
      timerMinutes: 25,
      isTimerRunning: false,

      addSound: (sound) => {
        const { activeSounds } = get();
        if (!activeSounds.has(sound.id)) {
          const audio = new Audio(sound.audioUrl);
          audio.loop = true;
          audio.volume = 0.5;
          audio.play();
          
          set((state) => ({
            activeSounds: new Map(state.activeSounds).set(sound.id, {
              volume: 0.5,
              audio,
            }),
          }));
        }
      },

      removeSound: (soundId) => {
        const { activeSounds } = get();
        const sound = activeSounds.get(soundId);
        if (sound) {
          sound.audio.pause();
          sound.audio.currentTime = 0;
          activeSounds.delete(soundId);
          set({ activeSounds: new Map(activeSounds) });
        }
      },

      setVolume: (soundId, volume) => {
        const { activeSounds } = get();
        const sound = activeSounds.get(soundId);
        if (sound) {
          sound.audio.volume = volume;
          set({
            activeSounds: new Map(activeSounds).set(soundId, {
              ...sound,
              volume,
            }),
          });
        }
      },

      saveMix: (name) => {
        const { activeSounds } = get();
        const volumes: Record<string, number> = {};
        
        activeSounds.forEach((sound, soundId) => {
          volumes[soundId] = sound.volume;
        });

        set((state) => ({
          savedMixes: [
            ...state.savedMixes,
            {
              id: Date.now().toString(),
              name,
              volumes,
            },
          ],
        }));
      },

      loadMix: (mix) => {
        const { activeSounds } = get();
        // 停止并清除所有当前播放的声音
        activeSounds.forEach((sound) => {
          sound.audio.pause();
          sound.audio.currentTime = 0;
        });

        // 加载新的混音
        const newActiveSounds = new Map();
        Object.entries(mix.volumes).forEach(([soundId, volume]) => {
          const sound = sounds.find(s => s.id === soundId);
          if (sound) {
            const audio = new Audio(sound.audioUrl);
            audio.loop = true;
            audio.volume = volume;
            audio.play();
            newActiveSounds.set(soundId, { volume, audio });
          }
        });

        set({ activeSounds: newActiveSounds });
      },

      deleteMix: (index) => {
        set((state) => ({
          savedMixes: state.savedMixes.filter((_, i) => i !== index)
        }));
      },

      setTimer: (minutes: number) => {
        if (minutes >= 1 && minutes <= 999) {
          console.log('Store: Setting timer to:', minutes); // 添加日志
          set((state) => ({
            ...state,
            timerMinutes: minutes,
            isTimerRunning: false // 设置新时间时停止计时器
          }));
        }
      },

      startTimer: () => {
        set((state) => ({
          ...state,
          isTimerRunning: true
        }));
      },

      stopTimer: () => {
        set((state) => ({
          ...state,
          isTimerRunning: false
        }));
      },
    }),
    {
      name: 'stayfocused-storage',
      partialize: (state) => ({
        savedMixes: state.savedMixes,
        timerMinutes: state.timerMinutes,
      }),
    }
  )
);