const readline =require("readline-sync");

let num =Number(readline.question("Enter a number \n"));
let count=0;
for(var i=1; i<=num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if(count==2)
{
    console.log("The entered number is prime")
}
else
console.log("the entered number is not prime")