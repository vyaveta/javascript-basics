const readline = require("readline-sync");
var choice 
var length 
var area
var width
var radius
var height
var base
class Area{
    square(length){
     return length*length;
    }
    circle(radius)
    {
        return radius*Math.PI;
    }
    rectangle(length,width)
    {
        return length*width;
    }
    triangle(base,height)
    {
        return 1/2*(base*height);
    }
}
class myClass extends Area{
    main(){
        choice=Number(readline.question("Enter Your choice 1.Square\n2.Circle\n3.Rectangle\n4.Triangle"));
        switch(choice){
            case 1 : length=Number(readline.question("Enter the length of the square\n"));
            area=super.square(length);
            console.log("the area is"+area)
            break;
            case 2 : radius=Number(readline.question("Enter the radious of the circle\n"));
            area=super.circle();
            console.log("the area is"+area)
            break;
            case 3 : length=Number(readline.question("Enter the lenght of the rectangle\n"));
            width=Number(readline.question("Now enter the width of the rectangle\n"));
            area=super.rectangle(length,width);
            console.log("the area is"+area)
            break;
            case 4 : height= Number(readline.question("Enter the height of the traingle\n"));
            base = Number(readline.question("Enter the base of the triangle\n"));
            area=super.triangle(height,base)
            console.log("the area is"+area)
            break;
            default : console.log("You have entered the wrong choice!!");
        }
    }
}
object=new myClass()
object.main()
