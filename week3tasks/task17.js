const readline = require("readline-sync");
//first im typing all the required functions 
function addition(a,b){
     console.log(a+b)
}

function substraction(a,b){
    console.log(a-b);
}
function multiplication(a,b){
    console.log(a*b);
}
function division(a,b){
      return a+b;
}
//functions ends here 

let num1= Number(readline.question("enter the first number \n"));
let num2 = Number(readline.question("Enter the second Number\n"));

let choice=Number(readline.question("Enter your choice 1 to 4\n"));

switch(choice){
    case 1 : let z= addition(num1,num2);
              console.log(z)
    break;
    case 2 : substraction(num1,num2);
    break;
    case 3 : multiplication(num1,num2);
    break;
    case 4 : division(num1,num2);
    break;
    default : console.log("you have made a wrong choice try again");
}