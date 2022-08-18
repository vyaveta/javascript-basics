const read = require("readline-sync")

class message1{
sayHello(){
console.log("hello")
}

}



class outer extends message1{
    constructor(name,surname,message="this is a default parameter"){// using this constructor we can define properties of an object 
        super()
        this.name=name
        this.surname=surname
        this.message=message//here we have not declared the message so the default message will print
        console.log("This is constructor")
    }
    printDetails(){
        console.log(this.name  + " "+ this.surname +" "+ this.message)
    }
}
let person1=new outer("Adwaith","vyaveta")
let person2=new outer("constatine","titanium")
person1.printDetails()
person2.printDetails() 
person2.sayHello()
