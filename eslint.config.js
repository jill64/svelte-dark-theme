import { svelteTsConfig } from '@jill64/eslint-config-svelte'

/** @type {import('@jill64/eslint-config-svelte').FlatConfig[]} */
export default svelteTsConfig({
  ignores: ['**/*.svelte.ts', '.svelte-kit']
})
