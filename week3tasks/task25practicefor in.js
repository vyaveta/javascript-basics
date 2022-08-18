const readline =require("readline-sync");

let person ={fname:"Adwaith",cname:"crystal",age:18}
let array =[]
let limit=Number(readline.question("Enter the array limit\n"));
console.log("Now enter the array elements  ");
for(var i =0;i<limit;i++){
    array[i]=(readline.question(""));
}

let signal;
for(let y in array){

if(array[y]=="Adwaith"){
    signal=1;
}
}
if(signal===1)console.log("Adwaith is available");

else console.log("Adwaith is not available");