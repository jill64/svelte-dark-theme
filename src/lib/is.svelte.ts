import { store } from './store.svelte'

export const is = {
  get dark() {
    return store.theme === 'dark'
  },
  get light() {
    return store.theme === 'light'
  }
}
