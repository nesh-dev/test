const assert = require('assert')
const { depthSum } = require('./depthSum')


test('Nested integer [[1, 1], 2, [1, 1]] Depth Sums to 10', () => {
    assert.equal(depthSum([[1, 1], 2, [1, 1]]), 10)
})

test('Nested integer [1, [4, [6]]] Depth Sums to 27 ', () => {
    assert.equal(depthSum([1, [4, [6]]]), 27)
})

test('Nested integer [2, [4, [4, 5], 9], 3] Depth Sums to 58', () => { 
    assert.equal(depthSum([2, [4, [4, 5], 9], 3]), 58)
})
