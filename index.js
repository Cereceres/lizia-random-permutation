'use strict'
/** 
 * @function
 * @param {array} array to be permuted random
 * @param {numer} - number of permutation to be made
*/
module.exports = function  (arrayToPermutate, numPermutation) {
    // if the number is not given is taken from 30-50 interval 
    numPermutation = numPermutation || (Math.random()*30 + 20)
    // the number has to be odd
    numPermutation = numPermutation % 2 ? numPermutation : numPermutation + 1 
    // init the counter
    let counter = 0
    // to get number differents
    let init 
    // other number to be used
    let other
    // get two numbers differents
    let getTwoNumbers = function  () {
        let _init = Math.floor(Math.random()*arrayToPermutate.length)
        let _other = Math.floor(Math.random()*arrayToPermutate.length)
        if (_init !== init) init = _init
        if(other !== _other) _other = other
        if(init !== other) return [init, other]
        return getTwoNumbers()
    }
    // recursive iterate to get the array random permuted
    return (function  random() {
        if(counter >= numPermutation) return arrayToPermutate
        let two = getTwoNumbers()
        let c = arrayToPermutate[two[0]]
        arrayToPermutate[two[0]] = arrayToPermutate[two[1]]
        arrayToPermutate[two[1]] = c
        counter++
        return random()
    })()
}