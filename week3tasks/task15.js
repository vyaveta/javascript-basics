const readline = require("readline-sync")
var a
var limit
function GetArray(){
    console.log("Now enter the array elements ");
    for(var i = 0;i<limit;i++)
    {
       a.push(Number (readline.question()));
    }
}
//function 2
function DisplayArray(){
    for(var i=0;i<limit;i++)
    {
        process.stdout.write(a[i]+" ");
    }
}
//end of function 2
function main(){
   a=[]
 limit= readline.question("Enter the array limit\n");
GetArray();
DisplayArray();
}
main()