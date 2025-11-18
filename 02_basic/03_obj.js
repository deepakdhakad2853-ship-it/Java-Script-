const trinderUser = {}

trinderUser.id = 1;
trinderUser.email = "deepak@gmail.com",
trinderUser.city = "indore"

// console.log(trinderUser);
const obj1 = {1:"a" , 2 : "b"}
const obj2 = {2:"a" , 3 : "b"}

 const obj3 = Object.assign({},obj1,obj2);
//  console.log(typeof(obj3));
// console.log(obj3);

const obj4 = {...obj1 , ...obj2}
// console.log(obj4);

// console.log(Object.keys(trinderUser));
// console.log(Object.values(trinderUser));
// console.log(Object.entries(trinderUser));

 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course);
const {coursename} = course
console.log(coursename);




