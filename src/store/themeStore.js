import { create } from 'zustand'

const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches

export const useThemeStore = create((set, get) => ({
  theme: localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light'),
  toggle: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark'
    set({ theme: next })
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  },
  init: () => {
    const t = get().theme
    document.documentElement.classList.toggle('dark', t === 'dark')
  }
}))
