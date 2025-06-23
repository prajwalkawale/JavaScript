// let mydate = new Date();
// console.log("\n")
// console.log(mydate);
// console.log("\n")
// // toISOString()
// console.log("To ISO string: ");
// console.log(mydate.toISOString());
// console.log("\n")
// // toJSON()
// console.log("To JSON: ");
// console.log(mydate.toJSON());
// console.log("\n")
// // toDateString()
// console.log("To date stirng:");
// console.log(mydate.toDateString());
// console.log("\n")

// //toTimestring()
// console.log("toTimestring: ");
// console.log(mydate.toTimeString());
// console.log("\n")

// //to local time string
// console.log("to local time string: ")
// console.log(mydate.toLocaleTimeString());
// console.log("\n")

// //to local date string
// console.log("to local time string: ");
// console.log(mydate.toLocaleDateString());
// console.log("\n")

// // to string
// console.log("to string: ")
// console.log(mydate.toString());
// console.log("\n")

// //to time string
// console.log("to time string: ");
// console.log(mydate.toTimeString())
// console.log("\n")

// note : Months in JavaScript start from 0

let mymanualDate = new Date(2025,5,23);

console.log("Manual date: ",mymanualDate);
console.log(mymanualDate.toDateString());

// converting data into seconds

// console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));

// Get the exact details about detail

let todaydate = new Date();
console.log(todaydate.getFullYear());

console.log(new Date().getFullYear());