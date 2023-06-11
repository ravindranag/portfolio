import { create } from "zustand"

interface DrawerStore {
	drawerOpen: boolean
	toggleDrawerOpen: () => void
}

const useDrawerStore = create<DrawerStore>((set, get) => ({
	drawerOpen: false,
	toggleDrawerOpen: () => set({drawerOpen: !get().drawerOpen})
}))

export default useDrawerStore