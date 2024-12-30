import { is } from '@jill64/svelte-device-theme'
import { store } from './store.svelte'

let theme = $derived(() => {
  const next = store.theme === 'dark' ? 'light' : 'dark'
  const config = (next === 'dark') === is.dark ? 'sync' : next
  store.setting = config
})

export const flip = {
  get theme() {
    return theme
  }
}
