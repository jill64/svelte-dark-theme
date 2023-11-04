export const parseAttributes = (raw: string): Record<string, string> => {
  const attributes = raw.match(/([a-zA-Z-]+)=["'](.*?)["']/g)

  if (!attributes) {
    return {}
  }

  return attributes.reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    return {
      ...acc,
      [key]: value.replace(/["']/g, '')
    }
  }, {})
}
