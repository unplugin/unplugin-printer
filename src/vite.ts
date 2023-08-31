import type { Plugin } from 'vite'
import type { Options } from './types'
import unplugin from '.'

export default unplugin.vite as (options?: Options | undefined) => Plugin
