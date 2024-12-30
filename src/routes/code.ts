export const code = ({ dark, setting }: { dark: boolean; setting: string }) => {
  const antiTheme = dark ? 'light' : 'dark'

  return /* html */ `
<script>
  import { is } from '@jill64/svelte-dark-theme'

  // current theme is dark = ${dark}
  console.log(is.dark)

  // current setting is '${setting}'
  console.log(setting.see)

  const change_to_${antiTheme} = () => {
    $theme = '${antiTheme}'
  }
</script>
`
}
