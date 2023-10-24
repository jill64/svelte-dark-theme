import { expect, test } from '@playwright/test'

test.use({
  colorScheme: 'dark'
})

test('test', async ({ page }) => {
  await page.goto('/svelte-dark-theme')
  await expect(
    page.getByRole('heading', { name: 'svelte-dark-theme' })
  ).toBeVisible()
})
