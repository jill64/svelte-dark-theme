<script lang="ts">
  import { ThemeManager, setting, theme } from '$lib'
  import { isDark } from '@jill64/svelte-device-theme'
  import { Radio } from '@jill64/svelte-input'
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
  import { spring } from 'svelte/motion'
  import FlipButton from '../lib/FlipButton.svelte'
  import GitHubLogo from './GitHubLogo.svelte'

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
  <hgroup>
    <h1>@jill64/svelte-dark-theme</h1>
    <p>☯ Dark theme manager for Svelte</p>
  </hgroup>
  <a href="https://github.com/jill64/svelte-dark-theme">
    <GitHubLogo />
  </a>
</header>

<main>
  <aside
    style:display="flex"
    style:flex-wrap="wrap"
    style:align-items="center"
    style:justify-content="center"
    style:gap="1rem"
  >
    <fieldset>
      <Radio list={['dark', 'light', 'sync']} bind:value={$setting} let:item>
        <span class="item">
          {#if item === 'dark'}
            <MoonIcon /> Dark
          {:else if item === 'light'}
            <SunIcon /> Light
          {:else}
            ☯ Sync
          {/if}
        </span>
      </Radio>
    </fieldset>
    <FlipButton />
  </aside>
  <output
    class="grid"
    style:--cell-width="{cell_h}px"
    style:--cell-height="{cell_h}px"
  >
    <code>
      Device<br />'{$isDark ? 'dark' : 'light'}'
    </code>
    <svg
      width={cell_w}
      height={cell_h}
      viewBox="0 0 {cell_w} {cell_h}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M {cell_w / 2} {cell_h} V {$mv_h}" fill="transparent" />
    </svg>
    <code>
      $setting<br />'{$setting}'
    </code>

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
    <code>
      $theme<br />'{$theme}'
    </code>
    <div />
  </output>
</main>

<style>
  :global(body) {
    transition: all 0.3s ease-in-out;
    font-family: sans-serif;
  }
  :global(.dark body) {
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
    border: 1px solid;
    display: flex;
    text-align: center;
    font-size: large;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: var(--cell-width);
    height: var(--cell-height);
  }
</style>
