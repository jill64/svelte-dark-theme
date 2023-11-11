<script lang="ts">
  import { browser } from '$app/environment'
  import { isDark } from '@jill64/svelte-device-theme'
  import { SvelteHTML } from '@jill64/svelte-html'
  import * as cookie from 'cookie'
  import { setting } from './store/setting'
  import { theme } from './store/theme'
  import type { StoredConfig } from './types/StoredConfig'

  export let key = 'svelte-dark-theme'

  $: if (browser) {
    document.cookie = cookie.serialize(
      key,
      JSON.stringify({
        setting: $setting,
        media: $isDark ? 'dark' : 'light'
      } satisfies StoredConfig),
      {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      }
    )
  }
</script>

<SvelteHTML class={$theme} />
