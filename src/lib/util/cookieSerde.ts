import { json } from 'svelte-baked-cookie/serde'
import { isStoredConfig } from './isStoredConfig'

export const cookieSerde = json(isStoredConfig, {
  setting: 'sync' as const,
  media: 'light' as const
})
