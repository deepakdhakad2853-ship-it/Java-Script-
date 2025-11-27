let myObject = {
    js : "javascript",
    cpp : "c++",
    py: "phyton",
    java : "java",
    rb: "ruby",
}

for (const key in myObject) {
//   console.log(key);
//   console.log(`${key} ${myObject[key]}`);
  
    
}

const array = ["js" , "ruby" , "python", "c++"]
for (const key in array) {
//    console.log(key); ye aaray ke index ko leta hai 
    
}

const map = new Map();
map.set("js" , "javascript");
map.set("cpp" , "c++");
map.set("py" , "python");

map.set("java" , "java");

// console.log(map);

for (const key in map) {
    // console.log(map); ye kuch bii reply nhii deta hai
    
    
}
let name = "hello Deepak"

for (const key in name) {
console.log(key);
    
}