function squareFunction (x) {
    return x * x;
}

const squareConst = function (x) {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(squareFunction(8));
console.log(squareConst(8));
console.log(squareArrow(8));

// Challenge:

const getFirstName = (fullName) => fullName ? fullName.split(' ')[0] : ''

console.log(getFirstName("adam Parkin"));