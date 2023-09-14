<script lang="ts">
  import { setting, theme } from '$lib'
</script>

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
</style>
