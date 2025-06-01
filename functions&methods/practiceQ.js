// create a function using the "Function" keyword that takes a String as an argument and returns the number of vowels in the string.


let msg = prompt("Type any string:");
function lengthOFstring(msg) {
let sum = 0;
  for (const i of msg) {
    if (i === "a" || i === "u" || i === "e" || i === "i" || i === "o") {
      sum = sum + 1;
    }
  }
 return sum;
}

const value2 = lengthOFstring(msg);
console.log(value2);

console.log("\n");
console.log("\n");

// Create an arrow function to perform the same task.

let msg2 = prompt("Enter any string:");

const myFunction = (msg2)=>{
    let count=0;
    for(const i of msg2){
        if(i==='a'||i==='o'||i==='u'||i==='e'||i==='i'){
            count = count+1;
        }
    }
    return count;
}

const finalOutput = myFunction(msg2);
console.log(finalOutput);