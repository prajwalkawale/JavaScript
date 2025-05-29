// Print all even numbers from 0 to 50

// solution 1
let num=0;

for(let i = 1; i<=50;i++){
    if(num%2==0){
        console.log("Even Number :",num);
    }
    num++;
}

// Solution 2

for(let i=0;i<=50;i++){
    if(i%2==0){
        console.log("number : ",i)
    }
}