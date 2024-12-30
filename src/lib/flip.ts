import { is } from '@jill64/svelte-device-theme'
import { store } from './store.svelte'

export const flip = $derived(() => {
  const next = store.theme === 'dark' ? 'light' : 'dark'
  const config = (next === 'dark') === is.dark ? 'sync' : next
  store.setting = config
})
