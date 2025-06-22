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

// callback hail 

function getData(data,getDatanext){
    setTimeout(() => {
        console.log("Data No. ",data);
        if(getDatanext){
            getDatanext()
        }
    }, 3000);
}


getData(1,()=>{
    console.log("Loading data<<")
    getData(2,()=>{
        console.log("Loading Next Data<<");
        getData(3,()=>{
           
            console.log("Finished Data>>")
        })
    })
})
