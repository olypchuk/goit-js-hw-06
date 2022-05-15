const enter=document.querySelector("#name-input");
const output=document.querySelector("#name-output");

enter.addEventListener("input",callbackEvent );

  function callbackEvent(event){  
   event.preventDefault()
  
    output.textContent = event.currentTarget.value === ""
      ? "Anonymous"
      :event.currentTarget.value
 }      
