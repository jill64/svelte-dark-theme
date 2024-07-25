<script lang="ts">
  import { theme } from '$lib'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript as js } from '@jill64/npm-demo-layout/highlight/languages'
  import { is } from '@jill64/svelte-device-theme'
  import { Radio } from '@jill64/svelte-input'
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
  import { spring } from 'svelte/motion'
  import { code } from './code'
  import { rootCode } from './rootCode'
  import { ssrCode } from './ssrCode'

  const cell_h = 100
  const cell_w = 100

  const mv_h = spring<number>()
  const mc_start_y = spring<number>()
  const mc_start_y2 = spring<number>()

  let isSync = $derived(theme.setting === 'sync')

  $effect(() => {
    $mv_h = isSync ? 0 : 100
    $mc_start_y = isSync ? cell_h / 2 : cell_h * 3 - cell_h / 2
    $mc_start_y2 = isSync ? cell_h / 2 : cell_h * 3 - cell_h / 2
  })
</script>

<main>
  <aside
    style:display="flex"
    style:flex-wrap="wrap"
    style:align-items="center"
    style:justify-content="center"
    style:gap="1rem"
  >
    <fieldset>
      {#snippet label(item)}
        <span class="item">
          {#if item === 'dark'}
            <MoonIcon /> Dark
          {:else if item === 'light'}
            <SunIcon /> Light
          {:else}
            ☯ Sync
          {/if}
        </span>
      {/snippet}
      <Radio list={['dark', 'light', 'sync']} {label} bind:value={theme.setting} />
    </fieldset>
  </aside>
  <output>
    <div
      class="grid"
      style:--cell-width="{cell_h}px"
      style:--cell-height="{cell_h}px"
    >
      <code data-testid="device">
        Device<br />'{is.dark ? 'dark' : 'light'}'
      </code>
      <svg
        width={cell_w}
        height={cell_h}
        viewBox="0 0 {cell_w} {cell_h}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M {cell_w / 2} {cell_h} V {$mv_h}" fill="transparent" />
      </svg>
      <code data-testid="setting">
        $setting<br />'{theme.setting}'
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

      <div></div>
      <code data-testid="theme">
        $theme<br />'{theme.value}'
      </code>
      <div></div>
    </div>
    <div style:overflow-x="auto" style:font-size="large">
      <HighlightSvelte code={rootCode.trim()} />
      <HighlightSvelte
        code={code({
          theme: theme.value,
          setting: theme.setting
        }).trim()}
      />
      <Highlight code={ssrCode} language={js} />
    </div>
  </output>
</main>

<style>
  output {
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    gap: 2rem;
  }
  @media (max-width: 800px) {
    output {
      grid-template-columns: auto;
    }
  }
  :global(body) {
    transition: all 0.3s ease-in-out;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .grid {
    display: inline-grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto auto;
    stroke: rgb(42, 193, 239);
    transition: stroke 0.3s ease-in-out;
    justify-content: center;
    align-items: center;
    stroke-width: 5;
  }
  :global(.dark) .grid {
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
