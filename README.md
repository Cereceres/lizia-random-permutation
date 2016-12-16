[![Build Status](https://travis-ci.org/Cereceres/lizia-random-permutation.svg?branch=master)](https://travis-ci.org/Cereceres/lizia-random-permutation)
# lizia-random-permutation
make a random permutation of a array given, like  lizia.
## Install
```bash
$ npm install lizia-random-permutation
```

## Usage

```js
const permutate  = require('lizia-random-permutation')
permutate([1,2,3,4,5]) // [3,2,1,5,4] random permuted

```
## API Documentation permutation -> object
### permutation.right(Array[,Number]) -> Array
The param is the array to be random permuted, the optional params is number of permutation
to be done. The array is passed by reference.
