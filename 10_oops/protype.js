let Myname = "deepak    ";
let age = "25";

// console.log(Myname.trim().length);

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true lenght is ${this.trim().length}`);
    
    
}
// console.log(Myname.truelength());


const user = {
    username : "deepak",
    age : '26'
}

const Myuser = {
    username : "Mohit",
    age : '66'
}

// const Array  = ["deepak", "mahit"]

Object.prototype.ChaiorCode = function(){
    // console.log(`age is ${this.age}`);
    console.log("my new array");
    
}

// const newUser =  user
// const newUser1 =  Myuser
// console.log(newUser1.ChaiorCode());


// console.log(Array.ChaiorCode());


const myNewHero = [ "thor" , "spiderman"]

const myNewObj = {
    user : "rohit",
    age : 56,
    greeting : function(){
        console.log(`my age is ${this.age}`);
    }
}
// console.log(myNewObj.greeting());

Object.prototype.deepak = function(){
    console.log(`deepak is all obj avilable`);
    
}
Array.prototype.Rajesh = function(){
    console.log("rajesh is avalble ");
    
}

myNewHero.deepak();
console.log( myNewObj.deepak())
myNewHero.Rajesh();
// console.log( myNewObj.Rajesh())
