import { create } from 'zustand';

export const useContextMenuStore = create((set) => ({
  contextMenuIndex: null,
  openContextMenu: (index) => set({ contextMenuIndex: index }),
  closeContextMenu: () => set({ contextMenuIndex: null }),
}));
