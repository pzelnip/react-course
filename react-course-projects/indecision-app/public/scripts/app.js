'use strict';

function squareFunction(x) {
    return x * x;
}

var squareConst = function squareConst(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareFunction(8));
console.log(squareConst(8));
console.log(squareArrow(8));

// Challenge:

var getFirstName = function getFirstName(fullName) {
    return fullName ? fullName.split(' ')[0] : '';
};

console.log(getFirstName("adam Parkin"));
