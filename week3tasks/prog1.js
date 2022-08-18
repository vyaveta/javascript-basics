// package
const readline = require("readline-sync");


//now the program starts
let Mark = Number(readline.question("Enter Your Marks: \n"));

if(Mark>90 && Mark<=100)
{
    console.log("Your grade is A ");
}
else if(Mark>=80 && Mark<=90){
    console.log("Your grade is B ");
}
else if(Mark>=70 && Mark<80){
    console.log("Your grade is C");
}
else if(Mark>=60 && Mark<70){
    console.log("Your grade is D");
}
else if(Mark>=50 && Mark<60){
    console.log("Your grade is E");
}
else if(Mark<50 && Mark>=0){
    console.log("Failed");
}
else{
    console.log("The exam is out of 100 \n seems like you have entered wrong marks \n try again")
}


