# unplugin-printer

<!-- <p align="center">
  <a href="https://www.npmjs.com/package/unplugin-printer" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/unplugin-printer" alt="NPM Version" /></a>
 <a href="https://github.com/unplugin/unplugin-printer/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/unplugin/unplugin-printer" alt="License" /></a>
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

## Features

- User-friendly options

- Customizable styles

- Supports async functions

## Options

`unplugin-printer` uses [kolorist](https://github.com/marvinhagemeister/kolorist) and [boxen](https://github.com/sindresorhus/boxen) to customize the text color and style of the output. You can refer to the documentation to explore the available options in detail.

```ts
import type * as kolorist from 'kolorist'

import type { Options as BoxenOptions } from 'boxen'

type Kolorist = typeof kolorist

type MessageValue = BoxenOptions & { text: string }

type Message = string | MessageValue | ((kolorist: Kolorist) => string | MessageValue | Promise<string | MessageValue | void>)

interface Options {
  info: Message[]
}
```

## Usage

```ts
// vite.config.ts

import Printer from 'unplugin-printer/vite'

export default defineConfig({
  plugins: [
    Printer({
      info: [
        // 1. use string value
        'Hello World',

        // 2. use object to customize the style
        { text: 'Hello World', padding: 1, margin: 1, borderColor: 'green' },

        // 3. use function to customize the text color and style
        (kolorist) => {
          return {
            text: kolorist.yellow('Hello World'),
            padding: 1,
            margin: 1,
          }
        },

        // 4. use with async function
        async (kolorist) => {
          const text = await fetch('https://api.github.com/repos/unplugin/unplugin-printer')
            .then(res => res.json())
            .then(res => res.description)

          return {
            text: kolorist.yellow(text),
            padding: 1,
            margin: 1,
          }
        },
      ]
    }),
  ],
})
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


## License

MIT License © 2023-PRESENT [webfansplz](./LICENSE)
