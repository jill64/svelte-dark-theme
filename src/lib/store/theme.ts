import { browser } from '$app/environment'
import { isDark } from '@jill64/svelte-device-theme'
import { derived } from 'svelte/store'
import { isThemeValue } from '../util/isThemeValue'
import { server } from './server'
import { setting } from './setting'

export const theme = derived(
  [isDark, setting, server],
  ([$isDark, $setting, $server]) =>
    browser
      ? isThemeValue($setting)
        ? $setting
        : $isDark
        ? 'dark'
        : 'light'
      : $server
)
