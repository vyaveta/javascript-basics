const readline = require("readline-sync") ;
  var a=[]; 
  var b=[];
  let temp;
let limit = readline.question("Enter the limit of the arrays \n");
 console.log("now enter the array elements");
 for(var i=0;i<limit;i++)
 {
   a.push(Number(readline.question())) ;
 }//inputing elements into array success!
 console.log("Now enter the element of second array ");
 for(var i=0;i<limit;i++)
 {
  b.push(Number(readline.question()));
 }
 //now we have entered all the elements from the user.

 for( var j =0;j<limit;j++)
 {
  temp = a[j];
  a[j] = b[j];
  b[j] = temp;
 }
console.log("Now printing the elements of first array ");
console.log(a   );
console.log("Now printing the values of second array ");
console.log(b   );
 
