const enter=document.querySelector("#name-input");
const output=document.querySelector("#name-output");

enter.addEventListener("input",callbackEvent );

  function callbackEvent(event){  
   event.preventDefault()
    if (event.currentTarget.value === "") {
      output.textContent = "Anonymous"
    } else {
      output.textContent = event.currentTarget.value
    }
 }      
