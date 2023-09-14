import { attempt } from '@jill64/attempt'
import type { Handle } from '@sveltejs/kit'
import { server } from './store/server'
import { setting } from './store/setting'
import { isStoredConfig } from './util/isStoredConfig'
import { isThemeValue } from './util/isThemeValue'

export const onRender = (options?: {
  cookieKey?: string
  placeholder?: string
}): Handle => {
  const {
    cookieKey = 'svelte-dark-theme',
    placeholder = '%svelte-dark-theme%'
  } = options ?? {}

  return ({ event, resolve }) => {
    const { request, cookies } = event

    const isPageRequest = request.headers.get('Accept')?.includes('text/html')

    if (!isPageRequest) {
      return resolve(event)
    }

    const str = cookies.get(cookieKey)

    if (!str) {
      return resolve(event)
    }

    const obj = attempt(() => JSON.parse(str))

    if (!isStoredConfig(obj)) {
      return resolve(event)
    }

    setting.set(obj.setting)

    const value = isThemeValue(obj.setting) ? obj.setting : obj.media

    server.set(value)

    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace(placeholder, value)
    })
  }
}
