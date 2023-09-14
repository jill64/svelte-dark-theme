import { typedStorage } from '@jill64/typed-storage'
import { writable } from 'svelte/store'
import type { ThemeSetting } from '../types/ThemeSetting'
import { isThemeSetting } from '../util/isThemeSetting'

const storage = typedStorage('svelte-dark-theme', {
  guard: isThemeSetting
})

const { subscribe, set } = writable<ThemeSetting>(storage.get() ?? 'sync')

export const setting = {
  subscribe,
  set: (value: ThemeSetting) => {
    storage.set(value)
    set(value)
  }
}
