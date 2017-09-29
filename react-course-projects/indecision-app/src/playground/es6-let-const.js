var nameVar = 'Andrew';
// vars can be reassigned:
nameVar = "new value";
// vars can be redeclared:
var nameVar = "New name var";
console.log('nameVar', nameVar);

// lets can be initialized
let nameLet = 'Jen';
// lets can be reassigned:
nameLet = 'Jen is my name';
// lets can not be redeclared:
//let nameLet = 'This blows up';
console.log('nameLet', nameLet);

// consts can be defined/initialized
const nameConst = "dsjflakj";
// consts cannot be redeclared:
//const nameConst = "This blows up";
// consts cannot be reassigned
//nameConst = "This blows up";
console.log('nameConst', nameConst);

function getPetName() {
    // vars are function scoped, this isn't visible outside getPetName
    var petName = 'Fido';

    // same with let & const
}

// block scoping (within a for loop, if block, etc).  Vars are *not* block scoped, but rather function scoped
if (42) {
    var firstName = "Bob";
}
console.log("Note firstname is visible here: ", firstName);

// const & lets *are* block scoped
if (42) {
    const constFirstName = "Bob";
}
// this is now illegal as const is limited to the block in which its defined:
//console.log("Note firstname is visible here: ", constFirstName);
