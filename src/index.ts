import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { vite, webpack } from './core'

export const unpluginFactory: UnpluginFactory<Options> = options => ({
  name: 'unplugin-printer',
  vite: vite(options),
  webpack: webpack(options),
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
