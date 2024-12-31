<script lang="ts">
  import { FlipButton, ThemeManager, theme } from '$lib'
  import { HighlightSwitcher } from 'svelte-highlight-switcher'
  import GitHubLogo from './GitHubLogo.svelte'

  let { children } = $props()
</script>

<HighlightSwitcher name={theme.isDark ? 'githubDark' : 'github'} />
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
