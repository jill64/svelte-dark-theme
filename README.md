<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-dark-theme

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-dark-theme)](https://npmjs.com/package/@jill64/svelte-dark-theme) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-dark-theme)](https://npmjs.com/package/@jill64/svelte-dark-theme) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-dark-theme)](https://npmjs.com/package/@jill64/svelte-dark-theme) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-dark-theme)](https://npmjs.com/package/@jill64/svelte-dark-theme) [![ci.yml](https://github.com/jill64/svelte-dark-theme/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-dark-theme/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-dark-theme.jill64.dev)](https://svelte-dark-theme.jill64.dev)

☯ Dark Theme Manager for SvelteKit

## [Demo](https://svelte-dark-theme.jill64.dev)

## Installation

```sh
npm i @jill64/svelte-dark-theme
```

<!----- END GHOST DOCS HEADER ----->

## Example

```svelte
<script>
  import { ThemeManager, setting, theme } from '@jill64/svelte-dark-theme'

  const setToDark = () => {
    $setting = 'dark'
  }

  const setToLight = () => {
    $setting = 'light'
  }

  const setToDeviceSync = () => {
    $setting = 'sync'
  }
</script>

<!-- Place it in root -->
<ThemeManager />

<!-- Theme Store ('dark' | 'light') -->
<div>Theme: {$theme}</div>

<!-- Theme Store ('dark' | 'light' | 'sync') -->
<div>Setting: {$setting}</div>

<style>
  :global(body.light) {
    /* light mode styling */
  }
  :global(body.dark) {
    /* dark mode styling */
  }
</style>
```

## flip

This function provides the smart theme switching found on some sites.
Each call to the function switches the `setting` according to the following rules

| before setting | device theme | after setting | after theme |
| -------------- | ------------ | ------------- | ----------- |
| `light`        | `light`      | `dark`        | `dark`      |
| `light`        | `dark`       | `sync`        | `dark`      |
| `dark`         | `light`      | `sync`        | `light`     |
| `dark`         | `dark`       | `light`       | `light`     |
| `sync`         | `light`      | `dark`        | `dark`      |
| `sync`         | `dark`       | `light`       | `light`     |

```svelte
<script>
  import { flip } from '@jill64/svelte-dark-theme'
</script>

<button on:click={$filp}> flip theme </button>
```

## SSR (Optional)

When using SSR, you can reduce flushing on load by binding classes to html with hooks.

```js
// hooks.server.js
import { onRender } from '@jill64/svelte-dark-theme'

export const handle = onRender({
  // Optional Configs
  // {
  //   cookieKey: string (default: 'svelte-dark-theme')
  // }
})
```

Use `sequence` when combining with other processing.

```js
// hooks.server.js
import { onRender } from '@jill64/svelte-dark-theme'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(onRender(), async ({ event, resolve }) => {
  // ...
  return resolve(event)
})
```
