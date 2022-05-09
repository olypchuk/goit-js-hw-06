const enter=document.querySelector("#name-input");
const output=document.querySelector("#name-output");

enter.addEventListener("input",callbackEvent );

  function callbackEvent(event){  
    console.log(event.currentTarget);
    if(event.currentTarget.value===""){
        return output.textContent="Anonymous"
    }
  return  output.textContent=event.currentTarget.value
 }      
