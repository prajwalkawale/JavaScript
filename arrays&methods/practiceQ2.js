// Create an array of numbers and take input from the user to add number to this array

let array1 = [1, 2, 3, 4];

let userInput = prompt("Enter a number to add in an array");
userInput = Number.parseInt(userInput);

array1.push(userInput);

console.log(array1);

// Create an array and prompt the user to enter values to fill the array.

let sizeOfarray = prompt("Enter the size of an array: ");
sizeOfarray = Number.parseInt(sizeOfarray);

let userArray = [];

for (let i = 0; i < sizeOfarray; i++) {
  let userInput2 = prompt("Enter the array elements: ");
  userInput2 = Number.parseInt(userInput2);
  userArray.push(userInput2);
}

console.log(userArray);

// Keep adding numbers to the array untile 0 is added to the array

let arr = [];
let userarr;

do {
 userarr = prompt("Enter the array elements: ");
  userarr = Number.parseInt(userarr);
  arr.push(userarr);
} while (userarr != 0);

console.log(arr);

// Select the numbers from the array that are divisible by 10

let filterArray = [1, 2, 30, 40, 50, 6, 7];

let newarray = filterArray.filter((x) => {
  return x % 10 == 0;
});

console.log(newarray);


// Create an array of Square of given numbers

let squareArray = [2,3,4,5];
let square;

for(let i =0;i<squareArray.length;i++){
    square = squareArray[i];
    square = square*square;
    console.log(squareArray[i]=square); 
}

// using map function

let mapArray = squareArray.map((x)=>{
    return x*x;
})

console.log("Using map: ",mapArray);


// Use reduce method to calculate factorial of a given number from an array 

let factorialArray = [1,2,3,4,5];

let reduceMethod = factorialArray.reduce((a,b)=>{
    return a*b;
})

console.log("Factorial: ",reduceMethod);