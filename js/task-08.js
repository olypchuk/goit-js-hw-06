const form=document.querySelector(".login-form");

const sendData=(ev)=>{
    ev.preventDefault() 
    const obj={};
//     console.log(ev);
//     console.log(ev.currentTarget.password.value);
//     console.log(ev.currentTarget.email.value);
//    console.log(form.elements.email.value);
//    console.log(form.elements.password.value);
if(ev.currentTarget.password.value===""||ev.currentTarget.email.value===""){
        alert("empty field!!!");
        return
    }
   obj.email=form.elements.email.value;
   obj.password=form.elements.password.value
   console.log(obj);
event.currentTarget.reset()
}
form.addEventListener("submit",sendData)