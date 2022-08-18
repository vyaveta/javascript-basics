const readline = require("readline-sync");

let dayNum = Number(readline.question("Enter the day number \n"));

switch(dayNum){
    case 1 : console.log("Sunday");
    break;
    case 2 : console.log("Monday");
    break;
    case 3 : console.log("Tuesday");
    break;
    case 4 : console.log("Wednesday");
    break;
    case 5 : console.log("Thursday");
    break;
    case 6 : console.log("Friday ");
    break;
    case 7 : console.log("Saturday");
    break;
    default : console.log("You have entered wrong day number \n there are only 7 days in a week\n ")
}
