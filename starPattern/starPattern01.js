// Right half Pyramid

for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
console.log("\n");
// Printing left half pyramid

function leftHalfpyramid(n) {
  for (let i = 1; i <= n; i++) {
    let j, k;
    let space = "";
    let star = "";
    for (j = 1; j <= n - i; j++) {
      space += " ";
    }

    for (k = 1; k <= i; k++) {
      star += "*";
    }
    console.log(space + star);
  }
}

leftHalfpyramid(4);

console.log("\n");

// Triangle star pattern

function triangleStarPattern(n){
  for(let i=1;i<=n;i++){

    let space="";
    let star="";
    let halfstar="";

    for(let j=1;j<=n-i;j++){
      space += " ";
    }

    for(let k=1;k<=i;k++){
      star +="*"
    }

    for(let l=1;l<i;l++){
      halfstar+="*";
    }

    console.log(space+star+halfstar);
  }
}

triangleStarPattern(4);