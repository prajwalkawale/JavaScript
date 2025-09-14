// Write a JavaScript function that returns array elements larger than a number.

let array1 = [1,25,3,45,9,74,47,55,10];

let num = 25;

function arrayFunction(array1,num){
    for(let i=0;i<array1.length;i++){
        if(array1[i]>num){
            console.log(array1[i]);
        }
    }
}

arrayFunction(array1,num);

// Write a JavaScript function to extract unique characters from a string.

let str = "abcdabcdefgggh";

function uniqFunction(str){
    let ans = "";
    for(let i=0;i<str.length;i++){
        let currentChar = str[i];
        
        if(ans.indexOf(currentChar) == -1){
            ans += currentChar;
        }
    }
    return ans;
}

uniqFunction(str);