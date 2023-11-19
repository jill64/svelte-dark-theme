import { expect, test } from '@playwright/test'

test('dark-mode', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })

  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: 'svelte-dark-theme' })
  ).toBeVisible()

  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).toContainText("'dark'")

  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'dark'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).toContainText("'sync'")

  expect(await page.locator('html').getAttribute('class')).toContain('dark')

  await page.getByLabel('Light').click()

  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).not.toContainText("'dark'")

  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'dark'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'sync'")

  expect(await page.locator('html').getAttribute('class')).toContain('light')

  await page.getByLabel('Dark').click()

  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).toContainText("'dark'")

  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).toContainText("'dark'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'sync'")

  expect(await page.locator('html').getAttribute('class')).toContain('dark')

  await page.getByLabel('Sync').click()

  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).toContainText("'dark'")

  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'dark'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).toContainText("'sync'")

  expect(await page.locator('html').getAttribute('class')).toContain('dark')

  await page.getByRole('button').click()

  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).not.toContainText("'dark'")

  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'dark'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'sync'")

  expect(await page.locator('html').getAttribute('class')).toContain('light')

  await page.getByRole('button').click()

  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$theme' })
  ).toContainText("'dark'")

  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'light'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).not.toContainText("'dark'")
  await expect(
    page.getByRole('code').filter({ hasText: '$setting' })
  ).toContainText("'sync'")

  expect(await page.locator('html').getAttribute('class')).toContain('dark')
})
