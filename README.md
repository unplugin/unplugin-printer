# unplugin-printer

<!-- <p align="center">
  <a href="https://www.npmjs.com/package/unplugin-printer" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/unplugin-printer" alt="NPM Version" /></a>
 <a href="https://github.com/webfansplz/unplugin-printer/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/webfansplz/unplugin-printer" alt="License" /></a>
</p> -->

<p align="center">
<img src="./screenshot.png" alt="unplugin-printer">
</p>

<p align="center">
<a href="https://stackblitz.com/edit/unplugin-printer-vite?file=vite.config.ts&view=editor"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>


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

