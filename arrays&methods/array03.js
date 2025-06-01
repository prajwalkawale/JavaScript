// join() method "Converts an array into a string with a separator. (_ / , )"

let num = [1, 2, 3, 4, 5];
// num.join("_"); "This method will not change the original array"
let num2 = num.join("_");
console.log(num2);
console.log(typeof num2);

// Delete method will delete the value form the array but it remains unchanged for the length of the array.

delete num[0];
console.log(num);
console.log(num.length);

// sort method "It will sort an array in alphabetical order. And it will change the original array."

let num3 = [555, 96, 64, 335, 744, 20, 12]; //this method will read the starting index and sort the array according to it.
num3.sort();
console.log("Sorted the array values: ", num3);

// To sort in ascending order, the sort method requires a compare function as a parameter.
let compare = (a, b) => {
  return a - b;
};

num3.sort(compare);
console.log("Ascending order : ", num3);

console.log("\n");
// For descending order, you can change the logic in the compare function to b-a then it will work as descending order

compare = (a, b) => {
  return b - a;
};

num3.sort(compare);
console.log("Descending order: ", num3);

// reverse method "It will reverse the order of elements in an array"

let num4 = [1, 2, 3, 4, 5, 6];
num4.reverse();
console.log("Reverse order of an array : ", num4);

console.log("\n");
console.log("\n");
console.log("\n");

//filter method
// "The filter method requires a function to filter the array according to the function logic."

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "keyboard", price: 25 },
];

const filterFunction = items.filter((items) => {
  return items.price <= 100;
});

console.log("The items below 100 rupees: ",filterFunction);

// map method "It works in a similar way to what we practised in the filter method."

const mapFunction = items.map((items)=>{
    return items.name
});

console.log("The list of item names : ",mapFunction);

//find method "It returns the elements that satisfy the condition"

const findFunction = items.find((items)=>{
    return items.name == "Book"
});

console.log("Found element is : ",findFunction);
console.log("\n");
// forEach method  "Executes a function on each array element."
// It will return a list of names.
items.forEach((items)=>{
    console.log("forEach: ",items.name);
});

// some method : "It returns boolean value based on a condition."

const someFunction = items.some((items)=>{
    return items.price <=100
});

console.log("some method: ",someFunction); //"It check some of array element that satisfy the condition." 


// every method : "It checks each array element and returns a boolean value based on a condition."

const everyFunction = items.every((items)=>{
    return items.price <=100
});

console.log("Does every atom fall under 100 rupees: ",everyFunction);


// reduce method "Calculate the total amount of the array elements"

const total = items.reduce((currentValue,item)=>{
    return item.price+currentValue
},0)

console.log(total);