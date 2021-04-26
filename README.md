# knit

Insert an item between array elements

![npm bundle size](https://img.shields.io/bundlephobia/min/@selrond/knit?style=flat-square)
![NPM](https://img.shields.io/npm/l/@selrond/knit?style=flat-square)

Insert an item between array elements

## Installation

```sh
npm i @selrond/knit
```

## Usage

Using ES Modules:

```js
import { knit } from '@selrond/knit'

knit([1,2,3], '🎉') // [ 1, '🎉', 2, '🎉', 3 ]
```

Using CommonJS:

```js
const { knit } = require('@selrond/knit')

knit([1,2,3], '🎉') // [ 1, '🎉', 2, '🎉', 3 ]
```
