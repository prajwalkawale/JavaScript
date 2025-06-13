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