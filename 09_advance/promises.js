// const promiseOne =  new Promise(function(resolve, reject){
//     console.log("hey Deepak")
// })
//  console.log(typeof(promiseOne))

// ***************************************

// const PromiseTwo = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Hey Deepak!!!");
//     },1000)
//     resolve()
// })
// PromiseTwo.then(function(){
//     console.log("promises Consumed")
// })

// **********************************8

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name : "Deepak" , email  : "Deepak@123"})
//     },1000)
// }).then(function(user){
//     console.log(user.name)
// })

// *************************************

// new Promise(function(resolve,reject){
//     resolve({name  : "Deepak", email : "dhakad@123"})
// }).then((user)=>{
//     console.log(user);
// })

// ***************************************

// new Promise(function(resolve,reject){
//     let error = false
//     setTimeout(function(){
//         if(error == true){
//             resolve({name  : "Deepak", email : "dhakad@123"})
//         }else{
//             reject("ERROR : Somthing Went Worng")
//         }
//     },1000)
// }).then((user)=>{
//     console.log(user)
// }).catch((error)=>{
//     console.log(error)
// })

// *************************

// const promiseFive = new Promise(function(resolve , reject){
//     let error  = false
//     setTimeout(function(){
//         if (error) {
//             resolve ({name : "deepak" , email : "dhakad@123" })
//         }
//         else{
//             reject("ERROR : Somthing Went Wrong Deepak Jii !!!!")
//         }
//     },1000)
// })

// async function consumePromiseFive (){
//     try {
//         const result =  await  promiseFive
//         console.log(result);    
//     } catch (error) {
//         console.log(error)
//     }
  
// }
// consumePromiseFive()

// ***********  fetch  ********

async function getAllUser (){
    try {
        const data =  await fetch("https://jsonplaceholder.typicode.com/users")
        let userdata = await data.json()
        log(userdata.id)
       if(userdata.id == 1){
            console.log(userdata)
        }
        else{
            console.log("not Found");
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

getAllUser()


