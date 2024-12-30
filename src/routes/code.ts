export const code = ({
  theme,
  setting
}: {
  theme: string
  setting: string
}) => {
  const antiTheme = theme === 'dark' ? 'light' : 'dark'

  return /* html */ `
<script>
  import { theme } from '@jill64/svelte-dark-theme'

  // current theme ${theme}
  console.log(theme.value)

  // current theme is dark: ${theme === 'dark'}
  console.log(theme.isDark)

  // current theme is light: ${theme === 'light'}
  console.log(theme.isLight)

  // current setting is '${setting}'
  console.log(setting.see)

  const change_to_${antiTheme} = () => {
    $theme = '${antiTheme}'
  }
</script>
`
}
