import { parseAttributes } from './parseAttributes'

export const transform = (html: string, theme: string): string =>
  html.replace(/<body(.*?)>/, (_, p1) => {
    const attrObj = parseAttributes(p1 ? p1 : '')
    const existClass = attrObj.class ? `${attrObj.class} ` : ''

    const attr = [
      ...Object.entries(attrObj).filter(([key]) => key !== 'class'),
      ['class', `${existClass}${theme}`]
    ]
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')

    return `<body ${attr}>`
  })
