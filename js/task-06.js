const enter=document.querySelector("#validation-input");

function inputSymb(event){
   
    if(String(event.currentTarget.value.length)===enter.dataset.length){
       enter.classList.remove("invalid")
        return enter.classList.add("valid")
    }
    enter.classList.remove("valid")
    return enter.classList.add("invalid")
}
enter.addEventListener("blur",inputSymb)
