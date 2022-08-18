const readline = require("readline-sync");
let limit = readline.question("Enter the limit  of array \n");
let a=[];
let c=[];
console.log("Now enter the array elements \n");
for(var i =0;i<limit;i++){
    a.push(Number(readline.question()));
}
//now calculations
for(var i =0;i<limit-1;i++)
{
    c[i]=a[i]*a[i+1];
}
console.log(c);