<script lang="ts">
  import { ThemeManager, setting, theme } from '$lib'
  import { Radio } from '@jill64/svelte-input'
</script>

<ThemeManager />
<header>
  <h1>@jill64/svelte-dark-theme</h1>
  <a href="https://github.com/jill64/svelte-dark-theme">GitHub</a>
</header>
<div>Theme: {$theme}</div>
<div>Setting: {$setting}</div>
<fieldset style:display="flex" style:gap="1rem" style:border="none">
  <Radio list={['dark', 'light', 'sync']} bind:value={$setting} let:item>
    <span style:margin-left="0.5rem">{item}</span>
  </Radio>
</fieldset>

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
