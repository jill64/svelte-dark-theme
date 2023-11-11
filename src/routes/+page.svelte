<script lang="ts">
  import { ThemeManager, setting, theme } from '$lib'
  import { isDark } from '@jill64/svelte-device-theme'
  import { Radio } from '@jill64/svelte-input'
  import { spring } from 'svelte/motion'
  import GitHubLogo from './GitHubLogo.svelte'

  const icon = {
    dark: '☾',
    light: '☀︎',
    sync: '☯'
  }

  const cell_h = 100
  const cell_w = 100

  const mv_h = spring<number>()
  const mc_start_y = spring<number>()
  const mc_start_y2 = spring<number>()

  $: isSync = $setting === 'sync'

  $: $mv_h = isSync ? 0 : 100
  $: $mc_start_y = isSync ? cell_h / 2 : cell_h * 3 - cell_h / 2
  $: $mc_start_y2 = isSync ? cell_h / 2 : cell_h * 3 - cell_h / 2
</script>

<ThemeManager />

<header>
  <div>
    <h1>@jill64/svelte-dark-theme</h1>
    <p>☯ Dark theme manager for Svelte</p>
  </div>
  <a href="https://github.com/jill64/svelte-dark-theme">
    <GitHubLogo />
  </a>
</header>

<main>
  <fieldset>
    <Radio list={['dark', 'light', 'sync']} bind:value={$setting} let:item>
      <span class="item">
        <span>{icon[item]}</span>
        <span>{item[0].toUpperCase()}{item.slice(1)}</span>
      </span>
    </Radio>
  </fieldset>
  <div
    class="grid"
    style:--cell-width="{cell_h}px"
    style:--cell-height="{cell_h}px"
  >
    <div class="cell">
      <code>Device</code>
      <!-- <code>@media (prefers-color-scheme: dark)</code> -->
      <code>'{$isDark ? 'dark' : 'light'}'</code>
    </div>
    <svg
      width={cell_w}
      height={cell_h}
      viewBox="0 0 {cell_w} {cell_h}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M {cell_w / 2} {cell_h} V {$mv_h}" fill="transparent" />
    </svg>
    <div class="cell">
      <code>$setting</code>
      <code>'{$setting}'</code>
    </div>

    <svg
      width={cell_w}
      height={cell_h * 3}
      viewBox="0 0 {cell_w} {cell_h * 3}"
      xmlns="http://www.w3.org/2000/svg"
      style:grid-row="1 / span 3"
    >
      <path
        d="M 0 {$mc_start_y} C {cell_w} {$mc_start_y2}, 0 {cell_h *
          1.5}, {cell_w} {cell_h * 1.5}"
        fill="transparent"
      />
    </svg>

    <div />
    <div class="cell">
      <code>$theme</code>
      <code>'{$theme}'</code>
    </div>
    <div />
  </div>
</main>

<style>
  :global(body) {
    transition: all 0.3s ease-in-out;
    font-family: sans-serif;
  }
  :global(body.dark) {
    background-color: #1b1b1b;
    color: #eee;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  p {
    font-size: large;
  }
  :global(.grid) {
    display: inline-grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto auto;
    stroke: rgb(42, 193, 239);
    transition: stroke 0.3s ease-in-out;
    justify-content: center;
    align-items: center;
    stroke-width: 5;
  }
  :global(.dark .grid) {
    stroke: rgb(34, 115, 139);
  }

  fieldset {
    border: none;
    gap: 1rem;
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 400px) {
    fieldset {
      grid-template-columns: auto;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
  }
  .item {
    display: flex;
    align-items: center;
    font-size: x-large;
    gap: 0.5rem;
    margin-left: 0.5rem;
  }
  code {
    display: block;
    text-align: center;
    font-size: large;
  }
  .grid div.cell {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: var(--cell-width);
    height: var(--cell-height);
  }
</style>
