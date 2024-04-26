// 1. Write the getDeltaFunction.

function getDeltaFunction(coefficients) {
    function getDelta(coefficient) {
        if (typeof coefficient === 'object') {
            const a = coefficient.a !== undefined ? coefficient.a : coefficients.a;
            const b = coefficient.b !== undefined ? coefficient.b : coefficients.b;
            const c = coefficient.c !== undefined ? coefficient.c : coefficients.c;
            if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
                return NaN;
            }
            return b * b - 4 * a * c;
        } else {
            const a = coefficients.a;
            const b = coefficients.b;
            const c = coefficients.c;
            if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
                return NaN;
            }
            return b * b - 4 * a * c;
        }
    }
    return getDelta;
}
// delta = b*b - 4*a*c
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48

// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

// 2. You get an array of numbers, return the sum of all the positives ones.

function getPositiveSum(arrayOfNumbers) {
    let sumPositiveNumbers = 0;
    arrayOfNumbers.forEach(function(numbersFromArray) {
        if (numbersFromArray > 0) {
            sumPositiveNumbers += numbersFromArray;
        }
    })
    return sumPositiveNumbers;
}

console.log(getPositiveSum([1,-4,7,12]));