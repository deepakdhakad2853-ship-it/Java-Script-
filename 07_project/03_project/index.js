const clock =  document.querySelector(".clock");
setInterval(function(){
    let  newdate =  new Date()
    clock.innerHTML = newdate.toLocaleTimeString()
} , 1000)
                                             