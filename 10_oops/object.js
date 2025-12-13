function multipalBy5 (num){
    return num*5
}
multipalBy5.power = 2
console.log(multipalBy5(5));
console.log(multipalBy5.power);
console.log(multipalBy5.prototype)

function createUSer ( username , score){
    this.username = username,
    this.score = score
    // return this
}
// console.log(new createUSer("deepak", 25))

// createUSer.prototype.Deepak = function(){
//     console.log("hello Deepak !!");
    
// }
// const chai  =  new createUSer
// console.log(chai.Deepak());

createUSer.prototype.increment = function(){
    this.score++
    console.log("Deepak");
    
}
createUSer.prototype.printMe = function (){
    console.log(`price  is ${this.score}`);
    
}
 
const chai = new  createUSer("Manish", 250);

console.log( chai.printMe());

