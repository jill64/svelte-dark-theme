<script lang="ts">
  import { browser } from '$app/environment'
  import { isDark } from '@jill64/svelte-device-theme'
  import { SvelteHTML } from '@jill64/svelte-html'
  import { bakery } from './bakery'
  import { setting } from './store/setting'
  import { theme } from './store/theme'

  export let key = 'svelte-dark-theme'

  const cookies = bakery(key).rebake()

  $: if (browser) {
    cookies[key].set({
      setting: $setting,
      media: $isDark ? 'dark' : 'light'
    })
  }
</script>

<SvelteHTML class={$theme} />
