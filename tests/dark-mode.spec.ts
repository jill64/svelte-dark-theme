import { expect, test } from '@playwright/test'

test('dark-mode', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })

  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: 'svelte-dark-theme' })
  ).toBeVisible()

  await expect(page.getByTestId('theme')).toContainText('dark')
  await expect(page.getByTestId('setting')).toContainText('sync')

  expect(await page.locator('html').getAttribute('class')).toContain('dark')

  await page.getByLabel('Light').click()

  await expect(page.getByTestId('theme')).toContainText('light')
  await expect(page.getByTestId('setting')).toContainText('light')

  expect(await page.locator('html').getAttribute('class')).toContain('light')

  await page.getByLabel('Dark').click()

  await expect(page.getByTestId('theme')).toContainText('dark')
  await expect(page.getByTestId('setting')).toContainText('dark')

  expect(await page.locator('html').getAttribute('class')).toContain('dark')

  await page.getByLabel('Sync').click()

  await expect(page.getByTestId('theme')).toContainText('dark')
  await expect(page.getByTestId('setting')).toContainText('sync')

  expect(await page.locator('html').getAttribute('class')).toContain('dark')

  await page.getByRole('button').nth(0).click()

  await expect(page.getByTestId('theme')).toContainText('light')
  await expect(page.getByTestId('setting')).toContainText('light')

  expect(await page.locator('html').getAttribute('class')).toContain('light')

  await page.getByRole('button').nth(0).click()

  await expect(page.getByTestId('theme')).toContainText('dark')
  await expect(page.getByTestId('setting')).toContainText('sync')

  expect(await page.locator('html').getAttribute('class')).toContain('dark')
})
