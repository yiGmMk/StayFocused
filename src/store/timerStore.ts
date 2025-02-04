import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TimerState {
  minutes: number;
  isRunning: boolean;
  soundEnabled: boolean;
  actions: {
    setMinutes: (minutes: number) => void;
    start: () => void;
    stop: () => void;
    reset: () => void;
    toggleSound: () => void;
  };
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set) => ({
      minutes: 25,
      isRunning: false,
      soundEnabled: true,
      actions: {
        setMinutes: (minutes: number) => {
          if (minutes >= 1 && minutes <= 999) {
            set({ minutes, isRunning: false });
          }
        },
        start: () => set({ isRunning: true }),
        stop: () => set({ isRunning: false }),
        reset: () => set({ isRunning: false }),
        toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      },
    }),
    {
      name: 'timer-storage',
      partialize: (state) => ({
        minutes: state.minutes,
        soundEnabled: state.soundEnabled,
      }),
    }
  )
);
