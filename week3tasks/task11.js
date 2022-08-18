const readline = require("readline-sync");

let count=0;
let limit = Number(readline.question("Enter the limit of array \n"));
let a=[];

console.log("Now enter the array values\n ");
for(var i= 0;i<limit;i++)
{
    a.push(Number(readline.question("")));
}
//array elements stored
for( i=0;i<limit;i++)
{
    if(a[i]%2==0)
    {
        count =count +1;
    }
    
}
console.log("There are " + count+" even numbers in the entered array \n");