// arguments object is no longer bound with arrow functions

const addEs5 = function(a, b) {
    console.log(arguments);
    return a + b;
}

const addArrow = (a, b) => {
    // arguments is not defined in arrow fns
    // console.log(arguments);
    return a + b;
}

console.log(addEs5(55, 1, 129837));
console.log(addArrow(55, 1, 129837));

// this keyword - no longer bound

const user = {
    name: "Adam",
    cities: ["Victoria", "New West"],
    printPlacesLived: function () {
        // inside ES5 function this is automagically bound to the object
        console.log("Before cities:", this.name);
        this.cities.forEach((city) => {
            // in arrow function, this is inherited from parent context
            console.log(this.name, "has lived in", city);
        });
    }
};
user.printPlacesLived();

// es6 method definition syntax
const user2 = {
    name: "Adam",
    cities: ["Victoria", "New West"],
    printPlacesLived() {  // note the syntax change here
        console.log("Before cities:", this.name);
        this.cities.forEach((city) => {
            console.log(this.name, "has lived in", city);
        });
    }
};
user2.printPlacesLived();

const multiplier = {
    numbers: [1, 5, 7],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());