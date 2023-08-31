import { defineNuxtModule } from '@nuxt/kit'
import type { Options } from './types'
import '@nuxt/schema'
import { print } from './core/print'

export interface ModuleOptions extends Options {

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-unplugin-printer',
    configKey: 'unpluginPrinter',
  },
  setup(options, nuxt) {
    nuxt.hook('vite:serverCreated', (_, { isServer }) => {
      if (isServer)
        print(options.info)
    })
  },
})
