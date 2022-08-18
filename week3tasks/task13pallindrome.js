const readline = require("readline-sync");

let signal =0;
let word =  String(readline.question("Enter a String\n"));
let a=word.length;
for(var i=0; i<a;i++)
{
    if(word[i]!== word[a-1-i])
    {
    signal =1;
    }
}
if(signal==0)
{
    console.log("The entered String is pallondrome");
}
else
console.log("The entered string is not pallindrome");
