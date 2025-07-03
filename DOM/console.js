

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


let acc = document.body.childNodes;
console.log(acc);
// converting childNodes to an array

let arr = Array.from(document.body.childNodes);
console.log(arr);

document.getElementsByTagName("nav")[0].firstElementChild.style.color="Red";


// write a javascript code to change background of all <li> tags to green


let arr2 = Array.from(document.getElementsByTagName("li"));
arr2.forEach(elements=>{
    elements.style.backgroundColor="green";
})


// create an element.

const div = document.createElement('div');
console.log(div);

div.innerText = "Hello JavaScript";
div.style.backgroundColor="orange";

document.body.append(div);