import { writable } from 'svelte/store'
import type { ThemeValue } from '../types/ThemeValue'

export const server = writable<ThemeValue>('light')
