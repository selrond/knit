# knit

Insert an item between array elements

## Installation

```sh
npm i @selrond/knit
```

## Usage

```js
import { knit } from '@selrond/knit'

knit([1,2,3], 'Hi!') // returns [1, 'Hi!', 2, 'Hi!', 3]
```
