function Setusername(username){
    // console.log("called user name", username);
    this.username = username
}
// Setusername("deepak")

function CreateUser ( username , email , password){
    Setusername.call(this,username)
    this.email = email,
    this.password = password
}

const chai = new CreateUser("mohit","mohit@123" , 123);


console.log(chai);
