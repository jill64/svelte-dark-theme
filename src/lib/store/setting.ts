import { themeSetting } from '$lib/enum/themeSetting'
import { storage } from '@jill64/svelte-storage'
import { enums } from '@jill64/svelte-storage/serde'
import { writable } from 'svelte/store'
import type { ThemeSetting } from '../types/ThemeSetting'

const local = storage('svelte-dark-theme', enums(themeSetting, 'sync'))

const { subscribe, set } = writable<ThemeSetting>('sync')

local.subscribe(set)

export const setting = {
  subscribe,
  set: (value: ThemeSetting) => {
    local.set(value)
    set(value)
  }
}
