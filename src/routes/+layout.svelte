<script lang="ts">
  import { FlipButton, ThemeManager } from '$lib'
  import GitHubLogo from './GitHubLogo.svelte'

  let { children } = $props()
</script>

<ThemeManager />

<header>
  <hgroup>
    <h1>svelte-dark-theme</h1>
    <p>☯ Dark Theme Manager for SvelteKit</p>
  </hgroup>
  <FlipButton />
  <GitHubLogo />
</header>

{@render children()}

<style>
  :global(body) {
    font-family: sans-serif;
    padding: 0 1rem;
  }
  :global(.dark body) {
    background-color: #161616;
    color: whitesmoke;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  hgroup {
    margin-right: auto;
  }
</style>
