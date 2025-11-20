function myname (){
    console.log("d")
    console.log("e")
    console.log("e")
    console.log("p")
    console.log("a")
    console.log("k")
}
// myname();

function sumTwoNumber (num , num2) {
    // console.log(num + num2);
    return num + num2
}
// sumTwoNumber(2,3)
// console.log(sumTwoNumber(4,6));
const sumFunctionNumber = sumTwoNumber(6,78)

// console.log(sumFunctionNumber);


let userName = "Deepak";

function myuser (userdata ) {
    if(userdata === undefined){
        console.log("please Enter Your Name");
        return
    }
    console.log(`${userdata} Just loggedIn`);
    
}
// myuser();


let user = {
    username : "Deepak dhakad",
    price : "999"
}

function handleObject (data){
    console.log(`userName is ${data.username} price is ${data.price}`);
    
}
// handleObject(user);
// handleObject({
//     username : "mahesh",
//     price : 222
// })

function calculateCardValue ( val1, val2,...calculateval) {
        console.log(calculateval);
        
}
// calculateCardValue(100,200,300)