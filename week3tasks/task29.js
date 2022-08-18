//
var sum=0;
function myFilter(MyArray,CallBack){
    this.MyArray=MyArray;
    this.CallBack=CallBack;
}
let array = new myFilter([1,2,3,4,5,6],function CallBack(){
    for(var i=0;i<array.length;i++)
    {
        sum=sum+array[i];
    }
    return sum%2==0;
})
function CallBack(){
    for(var i=0;i<array.length;i++)
    {
        sum=sum+array[i];
    }
    return sum%2==0;
}

console.log(sum)