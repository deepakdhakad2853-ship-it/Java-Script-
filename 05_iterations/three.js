// for of 

let arr = ["deepak", "nitesh" ,"manish"]

// for (const newarr of arr) {
//     console.log(newarr);
    
// }
let  greeting = "Hello Deepak!"

for (const greet of greeting) {
  //  console.log(greet);
    
}

const map = new Map();
map.set("js" , "javascript");
map.set("cpp" , "c++");
map.set("py" , "python");
map.set("java" , "java");

// console.log( map);

for (const [key ,value] of map) {
    // console.log( key,value);
       
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}