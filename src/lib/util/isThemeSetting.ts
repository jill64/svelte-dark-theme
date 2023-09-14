import { themeSetting } from '../enum/themeSetting.js'
import type { ThemeSetting } from '../types/ThemeSetting.js'

export const isThemeSetting = (s: unknown): s is ThemeSetting =>
  themeSetting.some((x) => x === s)
