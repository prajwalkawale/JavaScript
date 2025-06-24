// object literals

let specialSymbol = Symbol("Symbol");
console.log(typeof specialSymbol)

const person = {
    name : "Harry",
    "city" : "California",
    "full name" : "jack sparow",
    rollNum : 422,
    profession : "IT Employee",
    Skills : "Software Developer",
    // specialSymbol : "Special Symbol"  // data type will be string
    [specialSymbol] : "symbol2" // with using square brackets it will appear as a symbol in the object property
}

console.log(person.city);
console.log(person["city"]);
console.log(typeof person[specialSymbol]);

// without square bracket we can't access the full name
console.log(person["full name"]);

console.log(person)

// changes in object
person.greetings = function(){
    console.log("Hello JavaScript!!");
}

console.log(person.greetings());

person.name = "Clay";

console.log(person.name);

// If we use the Object.freeze method on an object, changes cannot be made to that object.

Object.freeze(person);

person.name = "Jakson";

console.log(person.name);


// Object assign method

const obj1 = {1:"A", 2:"B", 3:"C"};
const obj2 = {4:"D", 5:"E", 6:"F"};

console.log("\n");
const obj3 = Object.assign({},obj1,obj2);

console.log(obj3);