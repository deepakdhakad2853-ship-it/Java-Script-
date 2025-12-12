// const user = {
//     name : "Deepak",
//     signedIn : true,
//     loginCount : 8,
//     greeting : function(){
//         // console.log(`Deepak Dhakad ${this.name} `);  
//         console.log(this);
        
//     }
// }
// console.log(user);
// console.log(this);

// console.log(user.greeting())


function User (username , useremail , userage){
       this.username = username,
        this.useremail = useremail,
       this.userage = userage ;
       return this
}
const raj =  new User("deepak" , "deepak@123" , "9");
const rajTwo =  new User("mohit" , "deepak@888" , "9");
console.log(raj);
console.log(rajTwo);
