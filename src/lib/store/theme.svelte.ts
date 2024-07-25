import { browser } from '$app/environment'
import { themeSetting } from '$lib/enum/themeSetting'
import type { ThemeSetting } from '$lib/types/ThemeSetting'
import { is } from '@jill64/svelte-device-theme'
import { storage } from '@jill64/svelte-storage'
import { enums } from '@jill64/svelte-storage/serde'
import type { ThemeValue } from '../types/ThemeValue'
import { isThemeValue } from '../util/isThemeValue'

let server = $state<ThemeValue>('light')

let setting = storage('svelte-dark-theme', enums(themeSetting, 'sync'))

let store = $derived(
  browser
    ? isThemeValue(setting.value)
      ? setting.value
      : is.dark
        ? 'dark'
        : 'light'
    : server
)

export let theme = {
  get value() {
    return store
  },
  set value(value: ThemeValue) {
    setting.value = value
  },
  get setting() {
    return setting.value
  },
  set setting(value: ThemeSetting) {
    setting.value = value
  },
  get server() {
    return server
  },
  set server(value: ThemeValue) {
    server = value
  }
}
