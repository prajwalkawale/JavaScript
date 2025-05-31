// Push() method in javascript "Using this method the value will be added to the end position of the array"

let myCar = ["Hondai","Verna","Creata","Rangrover"];
console.log("The list of cars : ",myCar);
console.log("\n");
let myCarnames = myCar.push("Porsche");
console.log("new car added : ", myCarnames);

// pop() method "Using this method the value will be deleted to the end position of the array."

let mycarNamepop = myCar.pop();
console.log("Deleted car name : ",mycarNamepop);
console.log("Car name Deleted : ",myCar);
console.log("\n")
console.log("\n")

// toString() "Using this method the arrya will be converted into string"
console.log("String : ",myCar.toString());
let typeofCar = myCar.toString();
console.log(typeof typeofCar);

console.log("\n")

//Concat() "The Concat method joins the multiple arrays with each other"

let smartPhones = ["Apple","Samsung","Redmi","Motorola","Vivo"];
console.log("Famouse smart phone companies :",smartPhones);
console.log("\n");
let newSmartphones = smartPhones.concat("IQOO","Nothing","Oppo");
console.log("The list of smart phone companies :",newSmartphones);

// unshift() "This method is used to insert values at the beginning of the array"

let listOfcompanies = smartPhones.unshift("Micro-max","Lava","Honor");
console.log("The list of all companies : ",smartPhones);
console.log("\n");

// shift() "This method deletes values from the beginning of the array."

console.log(smartPhones.shift());

/* slice() "The slice() method in JavaScript is used to extract a portion of an array 
without modifying the original array. It creates a shallow copy of the selected elements 
and returns them in a new array. */

let sliceMethod = ["Wednesday","Clay","Hanha","Jenson"];
let sliceMethod2 = sliceMethod.slice(0,3);
console.log("\n");
console.log("Sliced Portion of the array : ",sliceMethod2);
console.log(sliceMethod);
console.log(sliceMethod.slice(3));

console.log("\n");
console.log("\n");
console.log("\n");


/* splice() "The splice() method is used to add, remove, or replace elements in an array.
It directly modifies the original array and returns an array of the removed elements." */
// splice(startIndex,deleting values,modifications)

let array1 = ["Ironman","Batman","Antman","dr.strange"];
console.log("Before Modification :",array1);
// adding values in the array
array1.splice(1,0,"Hulk");
console.log("Array modified : ",array1);

// delete the value in the array
array1.splice(2,1,"Spiderman");
console.log("One value has been removed, and One new value has been added to the array. :",array1);

/* array1.splice(3) 
If only one parameter is passed to the splice method, 
it behaves like the slice method by extracting a specific portion from the given input value, 
treating it as an index number.
*/
