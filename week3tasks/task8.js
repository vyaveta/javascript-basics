const readline = require("readline-sync");

let limit = Number(readline.question("Enter the limit : \n"));
let sum =0;
for(var i=1;i<limit;i+=2)
{
    sum=sum+i;
}
console.log("The sum of odd number ="+ sum);
