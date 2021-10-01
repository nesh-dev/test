
var assert = require('assert');

class NestedInteger  {
    value 

    constructor(value) { 
        this.value = value
    }
    /** @return true if this NestedInteger holds a single integer, rather than a nested list */

    isInteger(){ 
        return typeof this.value === 'number'
    }
 
    /** @return the single integer that this NestedInteger holds, if it holds a single integer
     * Return null if this NestedInteger holds a nested list */
    getInteger(){ 
        if (typeof this.value === 'number'){ 
            return this.value 
        }
        return null
    };
 
    /** @return the nested list that this NestedInteger holds, if it holds a nested list
     * Return null if this NestedInteger holds a single integer */
    getList(){ 
        if (Array.isArray(this.value)) { 
            return this.value
        } 
        return null
    };
}


function helper(nestedInput, depth){ 
    nestedInput = new NestedInteger(nestedInput)
    if(nestedInput.isInteger()){ 
        return nestedInput.getInteger() * depth; 
    } else { 
        var sum = 0;
        for (const x of nestedInput.getList()){ 
         sum += helper(x, depth + 1)
        }
        return sum;
    }
}


function depthSum(input){ 

    return helper(input, 0);
}

module.exports = { 
    depthSum
}
