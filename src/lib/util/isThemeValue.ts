import { themeValue } from '../enum/themeValue.js'
import type { ThemeValue } from '../types/ThemeValue.js'

export const isThemeValue = (s: unknown): s is ThemeValue =>
  themeValue.some((x) => x === s)
