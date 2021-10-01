const assert = require('assert')
const { depthSum } = require('./depthSum')


test('should add up to 10', () => {
    assert.equal(depthSum([[1, 1], 2, [1, 1]]), 10)
})

test('should add up to 27', () => {
    assert.equal(depthSum([1, [4, [6]]]), 27)
})

test('shoul add up to 58', () => { 
    assert.equal(depthSum([2, [4, [4, 5], 9], 3]), 58)
})

