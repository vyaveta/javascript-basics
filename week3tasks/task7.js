const readline = require("readline-sync");

let num = Number(readline.question("Enter a Number : \n"));

for( var i=1; i<=10; i++)
{
    console.log( i + "x" + num + "=" + i*num  + "\n" );
}
