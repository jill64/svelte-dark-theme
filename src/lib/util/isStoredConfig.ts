import { scanner } from 'typescanner'
import { isThemeSetting } from './isThemeSetting'
import { isThemeValue } from './isThemeValue'

export const isStoredConfig = scanner({
  setting: isThemeSetting,
  media: isThemeValue
})
