const readline= require("readline-sync");
 let c=[];
let a=[];
let k=0;
let limit= Number(readline.question("Enter the limit of the array \n"));
console.log("Now enter the array elements\n");
for( var i= 0;i<limit;i++)
{
    a.push(Number(readline.question("")));
}

//calculations
for(var j=0;j<limit;j++)
{
    for( i=limit-1;i>j;i--)
    {
        if(a[j]<a[i])
        {
            k=a[j];
            a[j]=a[i];
            a[i]=k;
        }
        
    }
       
    
}
console.log(a);