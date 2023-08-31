module.exports = {
  configureWebpack: {
    plugins: [
      require('../dist/webpack.cjs')({
        info: [
          async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
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
  },
}
