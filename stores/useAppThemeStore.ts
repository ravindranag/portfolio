import { create } from "zustand";

export type ThemeMode = 'LIGHT' | 'DARK' | undefined

interface AppThemeStore {
	themeMode: ThemeMode
	toggleThemeMode: () => void
	setThemeMode: (t: ThemeMode) => void
}

const useAppThemeStore = create<AppThemeStore>((set, get) => ({
	themeMode: 'LIGHT',
	toggleThemeMode: () => set({ themeMode:  get().themeMode === 'LIGHT' ? 'DARK' : 'LIGHT'}),
	setThemeMode: (t) => set({themeMode: t})
}))

export default useAppThemeStore