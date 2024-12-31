import { onRender } from '$lib'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://93b1fe4d87dc3ee2c537dcf653407c17@o4505814639312896.ingest.sentry.io/4506161182539776'
)

export const handle = onHandle(onRender())
export const handleError = onError()
