<script lang="ts">
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
  import { flip } from './flip'
  import { theme } from './store/theme'

  export let style = ''
  export let Class = ''
  export let iconSize = 24
  export let strokeWidth = 2
  export let iconClass = ''

  $: size = iconSize.toString()
  $: dark = $theme === 'dark'
</script>

<button on:click={$flip} on:click {style} class="{Class} {dark ? 'dark' : ''}">
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
