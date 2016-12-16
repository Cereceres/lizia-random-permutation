'use strict'
const assert = require('assert')
const random = require('../index')
describe('test to random permutate a array',function () {
    it('the random permutate in general has not return the same array',function  () {
        assert.notDeepEqual(random([1,2,3,4]), random([1,2,3,4]))
    })
})