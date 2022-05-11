const enter=document.querySelector("#font-size-control");
const textEnter = document.querySelector("#text");
textEnter.style.fontSize = enter.value +"px";

const changeSize = (event) => {
    textEnter.style.fontSize = event.currentTarget.value + "px";
}

enter.addEventListener("input",changeSize)
