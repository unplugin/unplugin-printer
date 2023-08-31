import type { Options } from '../types'
import { print } from './print'

export function vite(options: Options) {
  return {
    // @ts-expect-error vite config
    configureServer(server) {
      const _printUrls = server.printUrls
      server.printUrls = () => {
        _printUrls()
        print(options.info)
      }
    },
  }
}
