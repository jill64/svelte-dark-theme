<script lang="ts">
  import { setting, theme } from '@jill64/npm-demo-layout'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript as js } from '@jill64/npm-demo-layout/highlight/languages'
  import { is } from '@jill64/svelte-device-theme'
  import { Radio } from '@jill64/svelte-input'
  import { MoonIcon, SunIcon } from 'svelte-feather-icons'
  import { Spring } from 'svelte/motion'
  import { code } from './code'
  import { rootCode } from './rootCode'
  import { ssrCode } from './ssrCode'

  const cell_h = 100
  const cell_w = 100

  let mv_h = new Spring<number>(0)
  let mc_start_y = new Spring<number>(cell_h / 2)
  let mc_start_y2 = new Spring<number>(cell_h / 2)

  let isSync = $derived($setting === 'sync')

  $effect(() => {
    if (isSync) {
      mv_h.set(0)
      mc_start_y.set(cell_h / 2)
      mc_start_y2.set(cell_h / 2)
    } else {
      mv_h.set(100)
      mc_start_y.set(cell_h * 3 - cell_h / 2)
      mc_start_y2.set(cell_h * 3 - cell_h / 2)
    }
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
      <Radio list={['dark', 'light', 'sync']} bind:value={$setting}>
        {#snippet children(item)}
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
      </Radio>
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
        <path d="M {cell_w / 2} {cell_h} V {mv_h.current}" fill="transparent" />
      </svg>
      <code data-testid="setting">
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
          d="M 0 {mc_start_y.current} C {cell_w} {mc_start_y2.current}, 0 {cell_h *
            1.5}, {cell_w} {cell_h * 1.5}"
          fill="transparent"
        />
      </svg>

      <div></div>
      <code data-testid="theme">
        $theme<br />'{$theme}'
      </code>
      <div></div>
    </div>
    <div style:overflow-x="auto" style:font-size="large">
      <HighlightSvelte code={rootCode.trim()} />
      <HighlightSvelte
        code={code({
          theme: $theme,
          setting: $setting
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
