//Brocamp task 26
const read = require("readline-sync");
var sen;
function inputString(){
    sen =read.question("Enter a string\n");
    let result1=sen.split("");
    let result2=result1.reverse();
    let finalr=result2.join("");
    console.log("The reversed String is "+ finalr)
}
try{
    inputString()
}
catch(error) {
    console.log("an error has occured: The type of input is " + typeof(sen));
}
finally{
    console.log("the type of entered string is "+ typeof(sen));
}