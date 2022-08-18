const readline = require("readline-sync");
let a=[];
let b=[];
let c=[];
let limit = readline.question("Enter the array limit\n");
//function 1
function GetArray(){
    console.log("Now enter the array elements")
   for(var i=0;i<limit;i++)
   {
    a[i]=[];
    for(var j=0;j<limit;j++)
    {
        a[i][j]= Number(readline.question(""));

    }
   }
   console.log("Now enter the values of array 2");
   for(var i=0;i<limit;i++)
   {
    b[i]=[]
    for(var j=0;j<limit;j++)
    {
        b[i][j]= Number(readline.question());

    }
   }
}//end of function one
//function 2
function addArray(){
    for(var i=0;i<limit;i++)
    {
        c[i]=[]
        for(var j=0;j<limit;j++)
        {
         c[i][j]=a[i][j]+b[i][j];
        }
    }
}//end of function 2
//display function
function displayArray(){
    console.log(c);
}
GetArray();
addArray();
displayArray();
