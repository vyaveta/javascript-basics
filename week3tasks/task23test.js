const readline = require("readline-sync");

//program
var size
var a
class Task23{
    
    getArray(){
        console.log("Enter numbers into the array : ")
        for(var i=0;i<size;i++){
            a[i] = []
            for(var j=0;j<size;j++){
                 a[i][j] = Number(readline.question());
            }
        }
    }
    displayArray(){
        console.log("Output : ")
        for(var i=0;i<size;i++){
            for(var j=0;j<size;j++){
                process.stdout.write(a[i][j]+" ");
            }
            console.log()
        }
    }
    main(){
        a=[]
        size = Number(readline.question("Enter limit of the array : "))
        obj.getArray();
        obj.displayArray();
    }
}
var obj = new Task23()
obj.main();