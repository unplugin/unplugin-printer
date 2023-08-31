import { defineNuxtModule } from '@nuxt/kit'
import type { Options } from './types'
import '@nuxt/schema'
import { print } from './core/print'

export default defineNuxtModule<Options>({
  meta: {
    name: 'nuxt-unplugin-printer',
    configKey: 'unpluginPrinter',
  },
  setup(options: Options, nuxt) {
    nuxt.hook('vite:serverCreated', (_, { isServer }) => {
      if (isServer)
        print(options.info)
    })
  },
})
