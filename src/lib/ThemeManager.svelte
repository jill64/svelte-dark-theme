<script lang="ts">
  import { is } from '@jill64/svelte-device-theme'
  import { SvelteHTML } from '@jill64/svelte-html'
  import { bakery } from './bakery'
  import { theme } from './store/theme.svelte'

  let {
    key = 'svelte-dark-theme'
  }: {
    key: string
  } = $props()

  const cookies = bakery(key).rebake()

  $effect(() => {
    cookies[key].value = {
      setting: theme.setting,
      media: is.dark ? 'dark' : 'light'
    }
  })
</script>

<SvelteHTML class={theme.value} />
