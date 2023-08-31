import type { Options } from '../types'
import { print } from './print'

export function webpack(options: Options) {
  // @ts-expect-error vite config
  return (compiler) => {
    // @ts-expect-error vite config
    compiler.hooks.done.tap('unplugin-printer', (stats) => {
      if (stats.hasErrors())
        return
      print(options.info)
    })
  }
}
