<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-dark-theme

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/svelte-dark-theme"><img src="https://img.shields.io/npm/v/@jill64/svelte-dark-theme" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-dark-theme"><img src="https://img.shields.io/npm/l/@jill64/svelte-dark-theme" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-dark-theme"><img src="https://img.shields.io/npm/dm/@jill64/svelte-dark-theme" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-dark-theme"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-dark-theme" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-dark-theme/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-dark-theme/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-dark-theme.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-dark-theme.jill64.dev" alt="website" /></a>

<!----- END GHOST DOCS BADGES ----->

☯ Dark Theme Manager for SvelteKit

## [Demo](https://svelte-dark-theme.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Example

```svelte
<script>
  import { ThemeManager, setting, theme } from '@jill64/svelte-dark-theme'

  const setToDark = () => {
    setting.set('dark')
  }

  const setToLight = () => {
    setting.set('light')
  }

  const setToDeviceSync = () => {
    setting.set('sync')
  }
</script>

<!-- Place it in root -->
<ThemeManager />

<!-- Theme Store (true | false) -->
<div>is dark: {theme.isDark}</div>
<div>is light: {theme.isLight}</div>
<div>value: {theme.value}</div>

<!-- Theme Store ('dark' | 'light' | 'sync') -->
<div>Setting: {setting.see}</div>

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

<button onclick={flip.theme}> flip theme </button>
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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
