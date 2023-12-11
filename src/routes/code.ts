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

  // current theme is '${theme}'
  console.log($theme)

  // current theme is '${setting}'
  console.log($setting)

  const change_to_${antiTheme} = () => {
    $theme = '${antiTheme}'
  }
</script>
`
}
