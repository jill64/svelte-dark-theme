import { isDark } from '@jill64/svelte-device-theme'
import { derived, type Readable } from 'svelte/store'
import { setting } from './store/setting'
import { theme } from './store/theme'

export const flip: Readable<() => void> = derived(
  [theme, isDark],
  ([$theme, $isDark]) =>
    () => {
      const next = $theme === 'dark' ? 'light' : 'dark'
      const config = (next === 'dark') === $isDark ? 'sync' : next
      setting.set(config)
    }
)
