// function c(){
//     console.log("world")
//     var a = "hello"
//     console.log(a)
//     function inner(){
//         console.log("this is the inner function")
//     }
//     return inner;
   
// }
// // var n=c()
// // console.log(n)
// c()
// var obj=  new c()
// obj.inner()
function Book(type, author) {
    type ="just";
    this.author = author;
    this.getDetails = function () {
        return type + " written by " + this.author;
    }
}

var book = new Book("Fiction", "Peter King");
var book1 =new Book("tragedy","Shakesphere")

console.log(book.getDetails());        // => Fiction written by Peter King
