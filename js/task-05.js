const enter=document.querySelector("#name-input");
const output=document.querySelector("#name-output");

enter.addEventListener("input",callbackEvent );

  function callbackEvent(event){  
   
    if(event.currentTarget.value===""){
         output.textContent="Anonymous"
    }
   output.textContent=event.currentTarget.value
 }      
