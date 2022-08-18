const readline = require("readline-sync");

for(var i=1; i<=5;i++)
{
    for(var j=1;j<=i;j++){
        process.stdout.write(j + " ");
    }
    console.log()
}