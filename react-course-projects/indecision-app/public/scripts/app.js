"use strict";

// arguments object is no longer bound with arrow functions

var addEs5 = function addEs5(a, b) {
    console.log(arguments);
    return a + b;
};

var addArrow = function addArrow(a, b) {
    // arguments is not defined in arrow fns
    // console.log(arguments);
    return a + b;
};

console.log(addEs5(55, 1, 129837));
console.log(addArrow(55, 1, 129837));

// this keyword - no longer bound

var user = {
    name: "Adam",
    cities: ["Victoria", "New West"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // inside ES5 function this is automagically bound to the object
        console.log("Before cities:", this.name);
        this.cities.forEach(function (city) {
            // in arrow function, this is inherited from parent context
            console.log(_this.name, "has lived in", city);
        });
    }
};
user.printPlacesLived();

// es6 method definition syntax
var user2 = {
    name: "Adam",
    cities: ["Victoria", "New West"],
    printPlacesLived: function printPlacesLived() {
        var _this2 = this;

        // note the syntax change here
        console.log("Before cities:", this.name);
        this.cities.forEach(function (city) {
            console.log(_this2.name, "has lived in", city);
        });
    }
};
user2.printPlacesLived();

var multiplier = {
    numbers: [1, 5, 7],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return number * _this3.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
