import { onRender } from '$lib'
import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { PUBLIC_SENTRY_DSN } from '$env/static/public'

const { onHandle, onError } = serverInit(
  PUBLIC_SENTRY_DSN
)

export const handle = onHandle(onRender())
export const handleError = onError()
