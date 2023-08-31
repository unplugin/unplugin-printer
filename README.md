# unplugin-printer

[![NPM version](https://img.shields.io/npm/v/unplugin-printer?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-printer)

## Install

```bash
npm i unplugin-printer
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Printer from 'unplugin-printer/vite'

export default defineConfig({
  plugins: [
    Printer({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-printer/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-printer/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-printer/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

