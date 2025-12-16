// class User {
//     constructor(username , email , password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }
//     encryptPassword (){
//         return `${this.password}abc`
//     }
//     changName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const  chai = new User("chai", "chai@gmail.com", 123);
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changName());


// behnid the sence

function User (username , email, password){
        this.username = username,
        this.email = email ,
        this.password = password
}
User.prototype.encryptPassword = function(){
    console.log(`username : ${this.username}`);
    
}
User.prototype.changeName = function(){
    console.log(`username : ${this.username.toUpperCase()}`);
    
}
const  tea = new User("deepak", "deepak@gmail.com", 123);

console.log(tea.encryptPassword());
console.log(tea.changeName());
