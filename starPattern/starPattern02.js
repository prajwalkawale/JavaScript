// Triangle star pattern

let num = 1;

for(let i=1;i<=4;i++){
    let space = "";
    let star = "";

    for(let j=1;j<=4-i;j++){
        space +=" ";
    }
    for(let k=1;k<=num;k++){
        star += "*";
    }
    console.log(space+star);
    num = num + 2;
}

console.log("\n");
// reverse triagnel pyramid 
let N = 7;
for(let i=1;i<=4;i++){
    let space ="";
    let star = "*";
    for(let j =1;j<i;j++){
        space += " ";
    }

    for(let k =1;k<N;k++){
        star += "*";
    }
    console.log(space+star);
    N = N-2;
}