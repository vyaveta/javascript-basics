const readline = require("readline-sync");
var a 
var b
var choice 
var result
class prog23{

    addition(a,b){
     return a+b;
    }

    subtraction(a,b){
        return a-b;
    }
    multiplication(a,b){
        return a*b;
    }
    division(a,b){
        return a/b;
    }
    main()
    {
        a =Number(readline.question("Enter the first Number\n"));
        b=Number (readline.question("Enter the second Number\n"));
        choice =Number(readline.question("Now enter your choice 1 to 4"));

        switch(choice)
        {
            case 1: var result=object.addition(a,b)
            console.log("Adding two numbers and the result is"+ result);
            break;
            case 2: var result = object.subtraction(a,b)
            console.log("Subtracting two numbers and the result is "+ result);
            break;
            case 3: var result=object.multiplication(a,b)
            console.log("Multiplicating two numbers and the result is "+result);
            break;
            case 4: var result=object.division(a,b)
            console.log("dividing two numbers and the result is "+ result);
            break;
            default : console.log("wrong choice")
        }
    }
}
var object = new prog23()
object.main()