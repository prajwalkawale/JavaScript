
// setTimeout function 
// setTimeout function will print only one hello javascript in the console 
// const btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     setTimeout(()=>{
//         console.log("Hello JavaScript!");
//     },2000)
// })


// // setIntervel function
// // setIntervel function will print the statement continously with taking the defined intervel time

// btn.addEventListener("dblclick",()=>{
//     setInterval(()=>{
//         console.log("Hello JavaScript!");
//     },3000);
// })


// Change the background color with using start button and stop the changing background color event by using stop button

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

const randomColor = ()=>{
    const hexacolor = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color+= hexacolor[Math.floor(Math.random()*16)];
    }
    return color;
}


let intervelId;
const changebackground=()=>{
    if(!intervelId){
        intervelId = setInterval(changeColor,1000);
    }
   

   function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopbackground=()=>{
    clearInterval(intervelId);
    intervelId = null;
}

btn.addEventListener("click",changebackground);
btn2.addEventListener("click",stopbackground);