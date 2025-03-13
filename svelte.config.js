import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
}

export default config
/*
Update by azilamo
Comment by azilamo
(pnpm to bun)
いぇーいお母さんみってるぅ？？？？？
*/