const user = {
     usermyname  : "deepak",
     welcomeMasage : function (){
        console.log(`Hello ${this.usermyname} welcome to site `)
        console.log(this)
    }
}

user.welcomeMasage();
// console.log(this)
user.usermyname = "sam";
user.welcomeMasage();
