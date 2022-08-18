const readline = require("readline-sync");

let a=[]
let a2=[]
let sum=[]
 
let limit = Number(readline.question("Enter the size of the array \n"));
console.log("Now enter the array 1 elements");
for(var i= 0;i<limit;i++)
{
    a[i]=[];
    for(var j=0;j<limit;j++)
    {
        a[i][j]=Number(readline.question());
    }
}
console.log("Now enter the array 2 elements");
for( var i=0;i<limit;i++)
{
    a2[i]=[];
    for(var j=0;j<limit;j++)
    {
        a2[i][j]=Number(readline.question());
    }
}
for( var i=0;i<limit;i++)
{
    sum[i]=[]
    for(var j=0;j<limit;j++)
    {
        sum[i][j]=a[i][j]+a2[i][j];
    }
}
console.log("Now printing the sum of the entered arrays")
for(var i=0;i<limit;i++)
{
    for(var j=0;j<limit;j++)
    {
        process.stdout.write(sum[i][j]+" ");
    }
    console.log(" ")
}