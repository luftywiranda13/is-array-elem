# is-array-elem

[![npm](https://img.shields.io/npm/v/is-array-elem.svg?style=flat-square)](https://www.npmjs.com/package/is-array-elem)
[![Travis branch](https://img.shields.io/travis/luftywiranda13/is-array-elem/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/is-array-elem)
[![npm](https://img.shields.io/npm/dm/is-array-elem.svg?style=flat-square)](https://npm-stat.com/charts.html?package=is-array-elem&from=2016-04-01)

Checks if value is found in array, using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)

## Installation

```sh
npm install --save is-array-elem
```

## Usage

```js
const isArrayElem = require('is-array-elem');

isArrayElem(['foo', 'bar'], 'foo');
//=> true

isArrayElem(['foo', 'bar'], 'bar');
//=> true

isArrayElem(['foo', 'bar'], 'baz');
//=> false
```

## API

### isArrayElem([array, …], value)

Returns a `boolean` if `value` is found in `array`

## Related

- [lodash.indexof](https://www.npmjs.com/package/lodash.indexof) - Gets the index of value in array

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
