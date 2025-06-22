// Promises

//let p1 = new Promise((resolve,reject)=>{
//     console.log("data1");
//     resolve("Success")
// })

// console.log(p1);



function myfunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promise 1");
            resolve("Success")
        },3000)
    })
}

let p1 = myfunction();

p1.then((res)=>{
    console.log("Promise success",res);
})

p1.catch((err)=>{
console.log("Error",err);
})