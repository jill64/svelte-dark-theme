import { expect, test } from '@playwright/test'

test('light-mode', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })

  await page.goto('/svelte-dark-theme')
  await expect(
    page.getByRole('heading', { name: 'svelte-dark-theme' })
  ).toBeVisible()

  await expect(page.getByText('Theme: light')).toBeVisible()
  await expect(page.getByText('Theme: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).toBeVisible()

  await page.getByLabel('Dark').click()

  await expect(page.getByText('Theme: light')).not.toBeVisible()
  await expect(page.getByText('Theme: dark')).toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).toBeVisible()
  await expect(page.getByText('Setting: sync')).not.toBeVisible()

  await page.reload()

  await expect(page.getByText('Theme: light')).not.toBeVisible()
  await expect(page.getByText('Theme: dark')).toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).toBeVisible()
  await expect(page.getByText('Setting: sync')).not.toBeVisible()

  await page.getByLabel('Light').click()

  await expect(page.getByText('Theme: light')).toBeVisible()
  await expect(page.getByText('Theme: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: light')).toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).not.toBeVisible()

  await page.reload()

  await expect(page.getByText('Theme: light')).toBeVisible()
  await expect(page.getByText('Theme: Dark')).not.toBeVisible()
  await expect(page.getByText('Setting: light')).toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).not.toBeVisible()

  await page.getByLabel('Sync').click()

  await expect(page.getByText('Theme: light')).toBeVisible()
  await expect(page.getByText('Theme: Dark')).not.toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).toBeVisible()
})

test('dark-mode', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })

  await page.goto('/svelte-dark-theme')
  await expect(
    page.getByRole('heading', { name: 'svelte-dark-theme' })
  ).toBeVisible()

  await expect(page.getByText('Theme: light')).not.toBeVisible()
  await expect(page.getByText('Theme: dark')).toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).toBeVisible()

  await page.getByLabel('Light').click()

  await expect(page.getByText('Theme: light')).toBeVisible()
  await expect(page.getByText('Theme: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: light')).toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).not.toBeVisible()

  await page.getByLabel('Dark').click()

  await expect(page.getByText('Theme: light')).not.toBeVisible()
  await expect(page.getByText('Theme: Dark')).toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).toBeVisible()
  await expect(page.getByText('Setting: sync')).not.toBeVisible()

  await page.getByLabel('Sync').click()

  await expect(page.getByText('Theme: light')).not.toBeVisible()
  await expect(page.getByText('Theme: Dark')).toBeVisible()
  await expect(page.getByText('Setting: light')).not.toBeVisible()
  await expect(page.getByText('Setting: dark')).not.toBeVisible()
  await expect(page.getByText('Setting: sync')).toBeVisible()
})
