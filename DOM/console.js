

console.log(console);
console.error("Hey this is an error!");
console.warn("Hey this is a warnig msg to you!");

console.assert(5>53); // it will throw an error if we write any false statement.
console.assert(5<55);

// console.table

obj = {
    employeName:"Clay Jenson",
    employeAddress:"Los Angelos",
    employeID:2455,
    employeAge:26
};

console.table(obj);

console.time("forLoop");  // start time
for(let i=0;i<=4;i++){
    console.log("Hello");
}
console.timeEnd("forLoop");  // end time


console.time("whileLoop");  // start time
let j = 0;
while(j<=4){
console.log("Hello");
j++;
}
console.timeEnd("whileLoop"); // end time