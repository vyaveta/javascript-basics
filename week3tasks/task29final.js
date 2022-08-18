const readline = require("readline-sync");
function MyFilter(MyArray,CallBack){
    sum=0;
    for(var i =0;i<limit;i++){
        sum=sum+MyArray[i];
    }
    console.log("this is callback of sum :"+CallBack(sum))//calls the callback function
    if(CallBack(sum)==true) console.log("Returned from callback function : Even");//returns the value from callback function-
    else console.log("Returned from callback function : odd")
    return sum;   //thsi returns the sum to the first console statement-
}
function callback(sum){
    //console.log("checking the sum when the function is called")
    if(sum%2==0) return true
    else return false;
}
//The Program Actually Starts here-
let limit = Number(readline.question("Enter the limit  of the array \n"));
 var MyArray=[]
 console.log("Now enter the array elements ");
 for(var i =0;i<limit;i++){
    MyArray[i]=Number(readline.question(""));
 }
 console.log("Sum of the array :"+MyFilter(MyArray,callback))//calls the MyFilter Function