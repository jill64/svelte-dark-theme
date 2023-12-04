import { bakery as fn } from 'svelte-baked-cookie'
import { cookieSerde } from './util/cookieSerde'

export const bakery = (key = 'svelte-dark-theme') =>
  fn({
    [key]: cookieSerde
  })
