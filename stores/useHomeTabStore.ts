import { create } from "zustand"

interface HomeTabStore {
	activeTab: number
	setActiveTab: (n: number) => void
	tabIndicatorTranslateX: number
	setTabIndicatorTranslateX: (n: number) => void
}

const useHomeTabStore = create<HomeTabStore>((set) => ({
	activeTab: 0,
	setActiveTab: (n) => set({activeTab: n}),
	tabIndicatorTranslateX: 35,
	setTabIndicatorTranslateX: (n) => set({tabIndicatorTranslateX: n})
}))

export default useHomeTabStore