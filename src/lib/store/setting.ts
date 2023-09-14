import { browser } from '$app/environment'
import { attempt } from '@jill64/attempt'
import { typedStorage } from '@jill64/typed-storage'
import { writable } from 'svelte/store'
import type { ThemeSetting } from '../types/ThemeSetting'
import { isThemeSetting } from '../util/isThemeSetting'

const storageKey = 'svelte-dark-theme'

const storage = typedStorage(storageKey, {
  guard: isThemeSetting
})

const { subscribe, set } = writable<ThemeSetting>(storage.get() ?? 'sync')

if (browser) {
  addEventListener('storage', ({ key, newValue }) => {
    if (key !== storageKey || !newValue) {
      return
    }

    const value = attempt(() => JSON.parse(newValue), null)

    if (isThemeSetting(value)) {
      set(value)
    }
  })
}

export const setting = {
  subscribe,
  set: (value: ThemeSetting) => {
    storage.set(value)
    set(value)
  }
}
