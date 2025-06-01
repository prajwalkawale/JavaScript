// function is a block of code functions helps you to organize your code into reusable unit

// Named functions

function myFunction() {
  console.log("Hello JavaScript!");
}

myFunction();

function myFun(msg) {
  // parameter
  console.log(msg);
}

myFun("Hello Developer!"); // arguments

function myCalculations(a, b) {
  return a + b;
}
const total = myCalculations(4, 5);
console.log(total);

// arrow functions

const arrayFunctions = (a, b) => {
  return a * b;
};

console.log(arrayFunctions(4, 5));
console.log("function structure: ", arrayFunctions);

const greeting = () => {
  console.log("Good morning!");
};

greeting();

// without parameter and curly braces. If code is single line

const withoutParameter = () => console.log("Without Curly braces!!");

console.log(withoutParameter());


