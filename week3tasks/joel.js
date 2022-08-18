let readline=require('readline-sync')
var limit;
function myfilter(myArray,callback){
    sum=0
    for(i=0;i<limit;i++)
    {
        sum+=myArray[i];
    }
    if(callback(sum)==true){
        console.log('even number')
    }else
    {
        console.log('odd number')
    }
    return sum;
}
function callback(num)
{
    if(num%2==0){
        return true
    }else
    {
        return false
    }
}
 function main (){
    limit=Number(readline.question('enter the limit of array'))
 a=[]
console.log('enter the elements to array')
for(var j=0;j<limit;j++)
{
    a[j]=Number(readline.question(''))
}
 }
 main()
console.log('sum of array: '+myfilter(a,callback))