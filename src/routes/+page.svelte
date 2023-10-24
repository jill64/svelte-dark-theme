<script lang="ts">
  import { ThemeManager, setting, theme } from '$lib'
</script>

<ThemeManager />
<header>
  <h1>svelte-dark-theme</h1>
  <a href="https://github.com/jill64/svelte-dark-theme">GitHub</a>
</header>
<div>Theme: {$theme}</div>
<div>Setting: {$setting}</div>
<label>
  <input type="radio" bind:group={$setting} value="dark" />
  Dark
</label>
<label>
  <input type="radio" bind:group={$setting} value="light" />
  Light
</label>
<label>
  <input type="radio" bind:group={$setting} value="sync" />
  Sync
</label>

<style>
  :global(body) {
    font-family: sans-serif;
  }
  :global(body.dark) {
    background-color: #222;
    color: #eee;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
