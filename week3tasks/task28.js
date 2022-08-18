function Car(na,mileage,max_speed){
    this.nae=na//mustang
    this.mileage=mileage
    this.max_speed=max_speed  
}
let Car_1=new Car("mustang",20,170);
let Car_2=new Car("Audi",50,140);
let Car_3=new Car("BMW",70,120);
//printing the objects
console.log(Car_1);
console.log(Car_3);
console.log(Car_2);

function sign(nam,batchnoo,date,time)
{
    this.na=nam;
    this.batchnoo=batchnoo;
    this.date=date;
    this.time=8;
}
let abin=new sign("abin",36,23,9)
console.log(abin)
