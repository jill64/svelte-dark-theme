import { store } from './store.svelte'

export const theme = {
  get isDark() {
    return store.theme === 'dark'
  },
  get isLight() {
    return store.theme === 'light'
  },
  get value() {
    return store.theme
  }
}
