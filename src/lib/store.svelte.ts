import { browser } from '$app/environment'
import { themeSetting } from '$lib/enum/themeSetting'
import { is } from '@jill64/svelte-device-theme'
import { storage } from '@jill64/svelte-storage'
import { enums } from '@jill64/svelte-storage/serde'
import type { ThemeSetting } from './types/ThemeSetting'
import type { ThemeValue } from './types/ThemeValue'
import { isThemeValue } from './util/isThemeValue'

let server = $state<ThemeValue>('light')

let local = storage({ 'svelte-dark-theme': enums(themeSetting, 'sync') })

let localTheme = $state<ThemeSetting>('sync')

localTheme = $derived(local['svelte-dark-theme'])

let setting = $state<ThemeSetting>(localTheme)

let theme = $derived(
  browser
    ? isThemeValue(setting)
      ? setting
      : is.dark
        ? 'dark'
        : 'light'
    : server
)

export const store = {
  get server() {
    return server
  },
  set server(value) {
    server = value
  },
  get setting() {
    return setting
  },
  set setting(value) {
    setting = value
    local['svelte-dark-theme'] = value
  },
  get theme() {
    return theme
  }
}
