// Prototype in an object. It is a default property 

const greeting={
    greet:"Good Morning!",
    greet2(){
        console.log("Pleased to meet you sir!")
    }
} 

// console.log(greeting);

// greeting.greet2();

const salutation={
    sayHello : "Hello!",
}

// console.log(salutation.sayHello);

// Using the __proto__ keyword we can use the function that is declared in another object
// This function will act as a property that will appear in the list of prototype properties.

salutation.__proto__ = greeting ;

console.log(salutation.greet2());


