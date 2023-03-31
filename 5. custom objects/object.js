var empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com",
    swipeIn(){console.log("Swipe In by "+this.name)}
};
empOne.swipeIn();

// for in 
for(let property in empOne){
  console.log(empOne[property]);
}
/*
Object.values():

Object.values() will give all the values of an object in an array. For example:
*/

console.log("Object.values(empOne)");

console.log(Object.values(empOne));


console.log("Destructuring");
var { name ,... rest}  = empOne
console.log(name)
console.log(rest)













var car={
    name:"Maruti",
    price:10000,
    accelerate(){
        console.log(this.name +" is accelerating")
    }
}
car.accelerate();
car["model"]="800";
console.log(car.model);