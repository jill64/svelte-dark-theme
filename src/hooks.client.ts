import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'

const onError = clientInit(
  'https://93b1fe4d87dc3ee2c537dcf653407c17@o4505814639312896.ingest.sentry.io/4506161182539776'
)

export const handleError = onError()
