import { is } from '@jill64/svelte-device-theme'
import { theme } from './store/theme.svelte'

export let flip = () => {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  const config = (next === 'dark') === is.dark ? 'sync' : next
  theme.setting = config
}
