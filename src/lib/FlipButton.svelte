<script lang="ts">
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
  import { flip } from './flip'
  import { store } from './store.svelte'

  let {
    style = '',
    Class = '',
    iconSize = 24,
    strokeWidth = 2,
    iconClass = '',
    title = (dark: boolean) => `Change to ${dark ? 'Light' : 'Dark'} Theme`
  }: {
    style?: string
    Class?: string
    iconSize?: number
    strokeWidth?: number
    iconClass?: string
    title?: (dark: boolean) => string
  } = $props()

  let size = $derived(iconSize.toString())
  let dark = $derived(store.theme === 'dark')
</script>

<button
  onclick={flip}
  title={title(dark)}
  {style}
  class="{Class} {dark ? 'dark' : ''}"
>
  {#if dark}
    <SunIcon {size} {strokeWidth} class={iconClass} />
  {:else}
    <MoonIcon {size} {strokeWidth} class={iconClass} />
  {/if}
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    border-radius: 9999rem;
    padding: 0.5rem;
  }
  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  button:active {
    background: rgba(0, 0, 0, 0.2);
  }
  button:hover.dark {
    background: rgba(255, 255, 255, 0.1);
  }
  button:active.dark {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
