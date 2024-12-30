<script lang="ts">
  import { browser } from '$app/environment'
  import { is } from '@jill64/svelte-device-theme'
  import { SvelteHTML } from '@jill64/svelte-html'
  import { bakery } from './bakery'
  import { store } from './store.svelte'

  let { key = 'svelte-dark-theme' }: { key: string } = $props()

  const cookies = bakery(key).rebake()

  $effect(() => {
    if (browser) {
      cookies[key] = {
        setting: store.setting,
        media: is.dark ? 'dark' : 'light'
      }
    }
  })
</script>

<SvelteHTML class={store.theme} />
