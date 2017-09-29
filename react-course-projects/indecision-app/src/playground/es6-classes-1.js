

class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // es6 template strings:
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}


const me = new Person("Adam", 21);
const anon = new Person();
console.log(me);
console.log(anon);

console.log(me.getGreeting());
console.log(anon.getGreeting());

console.log(me.getDescription());
console.log(anon.getDescription());