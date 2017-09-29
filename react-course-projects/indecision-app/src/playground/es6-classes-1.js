

class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // es6 template strings:
        return `Hi, I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }        
    getDescription() {
        const superDesc = super.getDescription();
        return this.hasMajor() ? superDesc + ` and my major is ${this.major}` : superDesc + " and I have no declared major";
    }
    hasMajor() {
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        const superGreet = super.getGreeting();
        return this.homeLocation ? superGreet + ` I'm visiting from ${this.homeLocation}` : superGreet;
    }
}

const me = new Person("Adam", 21);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const anon = new Person();
console.log(anon);
console.log(anon.getGreeting());
console.log(anon.getDescription());

const p1 = new Student("Adam", 21, "CSc");
console.log(p1);
console.log(p1.getGreeting());
console.log(p1.getDescription());
console.log(p1.hasMajor());

const p2 = new Student("No Major", 21);
console.log(p2);
console.log(p2.getGreeting());
console.log(p2.getDescription());
console.log(p2.hasMajor());

const t1 = new Traveler("Bob", 18, "Victoria");
console.log(t1);
console.log(t1.getGreeting());

const t2 = new Traveler("Bob", 18);
console.log(t2);
console.log(t2.getGreeting());