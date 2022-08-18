let details = {
    Name:"Adwaith",
    lastName : "vinod",
    age : 18,
    age_2: 23,
     printCommand : function (name,lastName){
        console.log(name+'and'+' '+lastName );
    },
    printAge : function(age,age2){
        console.log(this.age+ "and "+age2)
    }
};
module.exports=details;