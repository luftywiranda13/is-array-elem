# is-array-elem

[![Greenkeeper badge](https://badges.greenkeeper.io/luftywiranda13/is-array-elem.svg)](https://greenkeeper.io/)

[![Package Version](https://img.shields.io/npm/v/is-array-elem.svg)](https://www.npmjs.com/package/is-array-elem)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/is-array-elem/master.svg)](https://travis-ci.org/luftywiranda13/is-array-elem)
[![Downloads Status](https://img.shields.io/npm/dm/is-array-elem.svg)](https://npm-stat.com/charts.html?package=is-array-elem&from=2016-04-01)

Check if value is found in array, using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)

## Installation

```sh
npm install --save is-array-elem
```

## Usage

```js
const isArrayElem = require('is-array-elem');

isArrayElem(['foo', 'bar'], 'bar');
//=> true

isArrayElem(['foo', 'bar'], 'baz');
//=> false

isArrayElem(['foo', 'bar'], 'foo');
//=> true
```

## API

### isArrayElem(array, value)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| array | `Array`  | Array to inspect |
| value | `*` | Value to search for |

#### Returns

- `Boolean`

## Related

- [lodash.indexof](https://www.npmjs.com/package/lodash.indexof) － Gets the index of value in array

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
