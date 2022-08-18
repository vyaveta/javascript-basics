const readline = require("readline-sync");
     var a
     var limit
class prog23{    
     getArray(){

        console.log("Now enter the array elements");
        for(var i= 0;i<limit;i++){
            a[i]=[]
            {
                for(var j=0;j<limit;j++)
                {
                    a[i][j]=Number(readline.question(""));
                }
            }
        }
    }
    displayArray(){
        console.log("And now printhing the array ")
        for(var i=0;i<limit;i++){
            for(var j=0;j<limit;j++)
            {
                process.stdout.write(a[i][j]+" ");
            }
            console.log("");
        }
    }
    main(){
        console.log("this is main")
         a=[];
         limit=Number(readline.question("Enter the limit"))
        b.getArray()
       b.displayArray()
    }
}
var b=new prog23();
b.main()