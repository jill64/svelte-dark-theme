<script lang="ts">
  import { browser } from '$app/environment'
  import { isDark } from '@jill64/svelte-device-theme'
  import cookie from 'cookie'
  import { setting } from './store/setting'
  import type { StoredConfig } from './types/StoredConfig'

  $: if (browser) {
    document.cookie = cookie.serialize(
      'svelte-dark-theme',
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
