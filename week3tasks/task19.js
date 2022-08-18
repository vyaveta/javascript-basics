const readline= require("readline-sync");
let salary =Number(readline.question("Enter your salary\n"));
if(salary<=250000){
    console.log("You dont have to pay tax")
}
else if(salary>250000 && salary<= 500000)
{
     let tax =(salary*5)/100;
     console.log("total tax "+ tax);
}
else if(salary>500000 && salary<= 1000000)
{
     let tax =(salary*20)/100;
     console.log("total tax "+ tax);
}
else if(salary>1000000 && salary<= 5000000)
{
     let tax =(salary*30)/100;
     console.log("total tax "+ tax);
}