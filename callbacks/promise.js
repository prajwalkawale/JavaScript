/********************************************************** Promises ********************************************************************************** */

//let p1 = new Promise((resolve,reject)=>{
//     console.log("data1");
//     resolve("Success")
// })

// console.log(p1);

// function myfunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise 1");
//       resolve("Success");
//     }, 3000);
//   });
// }

// let p1 = myfunction();

// p1.then((res) => {
//   console.log("Promise success", res);
// });

// p1.catch((err) => {
//   console.log("Error", err);
// });



/************************************************************ Callback hail ************************************************************************************** */


// function getData(data, getDatanext) {
//   setTimeout(() => {
//     console.log("Data No. ", data);
//     if (getDatanext) {
//       getDatanext();
//     }
//   }, 3000);
// }

// getData(1, () => {
//   console.log("Loading data<<");
//   getData(2, () => {
//     console.log("Loading Next Data<<");
//     getData(3, () => {
//       console.log("Finished Data>>");
//     });
//   });
// });


//******************************************************* Promise chain *********************************************************************** */

// function asynchFunction(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", data);
//       resolve("Completed!");
//     }, 3000);
//   });
// }

// function asynchFunction2(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", data);
//       resolve("Completed!");
//     },3000);
//   });
// }

// console.log("Fetching Data....");
// let p3 = asynchFunction(4);
// p3.then((res) => {
//   console.log("Status ", res);
//   console.log("Fetching Data....");
//   let p4 = asynchFunction2(5);
//   p4.then((res) => {
//     console.log("Status: ",res);
//   });
// });


/************************************************************* async await ************************************************************************** */

function getData(dataID){
    return new Promise((resolve,reject)=>{
        console.log("data fetching.....");
        setTimeout(() => {
            console.log("Data: ",dataID);
            resolve("Success");
        }, 3000);
    });
}

// async function getAlldata(){
//     await getData(1);
//     console.log("data fetching.....");
//     await getData(2);
//     console.log("data fetching.....");             // the same logic written with using IIFE method
//     await getData(3);
//     console.log("data fetching.....");
//     await getData(4);
// }


/******************************************************* IIFE (Function) ****************************************************************************** */
// using IIFE method we can declare function without name and execute as soon as it declare.
(async function(){
    await getData(1);
    console.log("data fetching.....");
    await getData(2);
    console.log("data fetching.....");             // the same logic written with using IIFE method
    await getData(3);
    console.log("data fetching.....");
    await getData(4);
})();