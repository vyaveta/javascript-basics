const readline= require("readline-sync")
let count=1;
for(var i=0;i<4;i++)
{
    for(j=0;j<=i;j++)
    {
        process.stdout.write(count+"    ");
        count++;
    }
    console.log();
    
}