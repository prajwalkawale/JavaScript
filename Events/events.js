// let btn = document.getElementById("btn");

let btn = document.querySelector("#btn");

// btn.onclick = (ent) => {
//   console.log("hello");
//   console.log(typeof ent);
//   console.log(ent);
// };

// btn.ondblclick = (ent) => {
//   alert("Double click hello");
//   console.log(ent);
// };


btn.addEventListener("click",()=>{
  console.log("Hello DOM1!");
})

// for removing any event that specific event need to store in a variable 
// then only the event lister will remove the specified event.(it store in same memory)

const removebtn =()=>{
  console.log("Hello DOM2!");
}

btn.addEventListener("click",removebtn);
btn.addEventListener("click",()=>{
  console.log("Hello DOM3!");
})

btn.addEventListener("click",()=>{
  console.log("Hello DOM4!");
})


btn.removeEventListener("click",removebtn);

// Event propogation method

let outerdiv = document.getElementById("outerdiv");
let innerdiv = document.getElementById("innerdiv");

outerdiv.addEventListener("click",(ent)=>{
  console.log("Hello Outer Div!!")
},false); // by default it is always false



// innerdiv.addEventListener("click",(ent)=>{
//   console.log("Hello Inner Div!!")  // This inner div will print its console. it follows bubbling up method
//   // The execution will happen bottom to top
//   // if we want to print only this specific event then we can use stop.propogation property.

// },false) 





// If you want to execute the code in a usual manner, top to bottom, then you can simply include the true value in the parameter

// innerdiv.addEventListener("click",(ent)=>{
//   console.log("Using capturing mode!")

// },true) // it is known as capturing mode by adding true value 


// Stop propogation method

innerdiv.addEventListener("click",(ent)=>{
  console.log("This is the only block of code that will print");
  ent.stopPropagation();
},false)


// prevent default method

let googleLink = document.querySelector("a");
googleLink.addEventListener("click",(ent)=>{
  console.log("This link will not take you on google search page!");
  ent.preventDefault();
})

