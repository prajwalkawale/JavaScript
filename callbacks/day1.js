
function getData(data,getNextdata){
    setTimeout(()=>{
        console.log("Data ",data);
        if(getNextdata){
        getNextdata();
    }
    },2000)
    
}

getData(1,()=>{
    console.log("Getting data 2");
    getData(2,()=>{
        console.log("Getting data 3");
        getData(3,()=>{
            getData;
        });  
    });
});



