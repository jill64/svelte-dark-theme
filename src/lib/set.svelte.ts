import { store } from './store.svelte'
import type { ThemeSetting } from './types/ThemeSetting'

export const setting = {
  get see() {
    return store.setting
  },
  set(value: ThemeSetting) {
    store.setting = value
  }
}
