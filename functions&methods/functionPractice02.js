//It is also called as Higher Order Function / methods

// forEach() funtion
// method is used to iterate over the elements of an array

const products = [
  { name: "TV", price: 5000 },
  { name: "Smartphone", price: 10000 },
  { name: "Refrigirator", price: 10000 },
  { name: "SmartTab", price: 5000 },
  { name: "Laptops", price: 3000 },
];

const productNames = products.forEach(function (value, index, arr) {
  // it is know as call back function.
  console.log(value.name, index, arr);
});

console.log(productNames);

// For a given array of numbers, print the square of each value using the forEach loop.
// the given array [1,2,3,4]

let num = [1, 2, 3, 4, 5];

num.forEach((valu) => {
  console.log(valu * valu);
});

// this can be another method to write solution.

const calculateSquare = (valu, indexx, arr) => {
  console.log(valu * valu, indexx, arr);
};

console.log("A another method to write the solution:");
num.forEach(calculateSquare);

const isTVinlist = products.some((valu) => {
  return valu.name == "TV";
});
console.log("is the TV included : ", isTVinlist);

const maximumPrice = products.every((item) => {
  return item.price <= 10000;
});

console.log(maximumPrice);

// The map method acts similarly to the forEach method. the only difference is map method doesn't change the original array.

let num2 = [1, 2, 3, 4, 5];
let num2variable = num2.map((value) => {
  return value * value;
});
console.log(num2variable);

console.log("\n");

// filter method()

const filterMethod = products.filter((item)=>{
  return item.price <=5000;
})

console.log(filterMethod);


// reduce() method

const num3 = [1,2,3,4,5];    // in this array the previous value will be 1 and current value will be 2

const num3output = num3.reduce((previous,current)=>{
  return previous + current ;
})

console.log(num3output);

// find out the largest number in the array

const largNumber = num3.reduce((previous,current)=>{
  return previous> current ? previous : current;
})

console.log(largNumber);


