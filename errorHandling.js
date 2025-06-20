let a = 5;
let b = 6;

console.log(a + b);
console.log(a + b);
console.log(a + b);

try {
  console.log(a + c); // It will trigger an error as we didn't declare the c variable.
} catch (err) {
  console.log(err);
}

console.log(a + b);
console.log(a + b);
console.log(a + b);
