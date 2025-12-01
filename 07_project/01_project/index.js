const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',function(e){
        // body.style.backgroundColor = e.target.id
        if(e.target.id === "red"){
            body.style.backgroundColor =e.target.id
        }
         if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
         if(e.target.id === "Yellow"){
            body.style.backgroundColor = e.target.id
        }
         if(e.target.id === "gray"){
            body.style.backgroundColor = e.target.id
        }
    })
})
