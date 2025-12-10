const randomcolor = function(){
    const hax = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
       color+= hax [Math.floor( Math.random() *16 )]
    }
    return color
}
let stopcolorchange;

const startchangingcolor = function(){
    if (!stopcolorchange) {
        stopcolorchange = setInterval(changecolor,1000);
    }
 function changecolor (){
    document.body.style.backgroundColor = randomcolor()
}
}
const stopchangingcolor = function(){
    clearInterval(stopcolorchange)
    stopcolorchange = null
}

document.getElementById("stop").addEventListener("click",stopchangingcolor);
document.getElementById("start").addEventListener("click",startchangingcolor);