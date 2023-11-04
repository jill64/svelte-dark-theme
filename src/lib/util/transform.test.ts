import { expect, test } from 'vitest'
import { transform } from './transform'

test('transform', () => {
  expect(transform('<html>', 'dark')).toBe('<html>')

  expect(transform('<body>', 'dark')).toBe('<body class="dark">')

  expect(transform('<body id="test">', 'light')).toBe(
    '<body id="test" class="light">'
  )

  expect(transform('<body class="test">', 'light')).toBe(
    '<body class="test light">'
  )
})
