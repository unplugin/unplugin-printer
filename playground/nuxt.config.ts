export default defineNuxtConfig({
  modules: [
    ['unplugin-printer/nuxt', {
      info: [
        async () => {
          await new Promise(resolve => setTimeout(resolve, 2000))
        },
        async () => {
          return '\n\n🌞: Welcome to unplugin-printer!'
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
    }],
  ],
})
