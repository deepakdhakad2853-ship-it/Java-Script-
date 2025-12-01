 const form = document.querySelector("form");
 form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result =  document.querySelector("#result");
    if(height === ''|| height <0 ||  isNaN(height) ){
        result.innerHTML = `please vaild Height ${height} `; 
    }else if(weight === ''|| weight <0 ||  isNaN(weight) ){
      result.innerHTML = `please vaild weight ${weight}`; 
    }
    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2); 
        result.innerHTML = `<span> bmi is  ${bmi} </span`
    if(bmi <= 18.6){
            alert("under height less than 18.6")
    }else if(bmi==18.6 || bmi <= 24.9){
            alert("Normal range Weight")
    }else if(bmi >= 24.9){
            alert("over Weight")
    }
    }
      
    // if( <= 18.6){
    //     console.log("under height less than 18.6");
        
    //     // alert("under height less than 18.6")
    // }
    
    
 })