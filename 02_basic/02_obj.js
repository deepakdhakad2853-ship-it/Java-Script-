// singleton value
// Object.create

// object litelars 
const mySym =  Symbol("key1")
const jsUser = {
    name : "deepak",
    email : "deepak@gmail.com",
    [mySym] : "mysyml",
    password : "123abc",
    isLogedin : false,
    lastLoggedInDay : ["manday", "wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
const newObj = {
    ...jsUser,
    age : "22"
}
// console.log(newObj);  isse purane obj ko change nhii kiya ja skta hai 

// console.log(typeof(jsUser[mySym]));
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello");  
}
console.log(jsUser.greeting());
console.log(jsUser);





