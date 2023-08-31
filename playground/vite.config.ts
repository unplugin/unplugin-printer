import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '../dist/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    Unplugin({
      info: [
        ({ lightCyan, green, bold }) => {
          return `  ${green('➜')}  ${bold('Printer:')} ${lightCyan('https://github.com/webfansplz/unplugin-printer')}`
        },
        ({ lightCyan, green, bold }) => {
          const text = `  ${green('➜')}  ${bold('Repo:')} ${lightCyan('https://github.com/webfansplz/unplugin-printer')}`
          return {
            text,
            title: 'Unplugin Printer',
            padding: 1,
            margin: 1,
            borderStyle: 'round',
          }
        },
      ],
    }),
  ],
})
