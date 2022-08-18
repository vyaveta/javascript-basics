const readline = require("readline-sync");
let height;
function checkHeight(){
      height=readline.question("Enter Your Height in cm\n");
      //creating 3 custom errors
      if(isNaN(height)==true) throw "You have entered a String height cannot be a string\nTry inputing Integer value\n";
      if(height<=10) throw "Entered Height is too low\n";
      if(height>=100) throw "Entered Height is too big\n";
      console.log("The entered height is "+height);
}
try{
    checkHeight()
}
catch(error){
    console.log("AN ERROR OCCURRED" +error);
}
finally{
    console.log("The program has ended")
}