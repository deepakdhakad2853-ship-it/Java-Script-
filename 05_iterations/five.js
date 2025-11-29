const myarray = ["js", "ruby" , "c++" , "react"]

myarray.forEach( function(items , index){
    // console.log(items , index);
    
} )

myarray.forEach((items)=>{
    // console.log(items);
    
})

function printme( items){
    console.log(items);
    
}
// myarray.forEach(printme)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((items)=>{
    console.log(items.languageFileName);
    
})
