function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const enter=document.querySelector("#controls")
const input=enter.querySelector("input");
const boxes=document.querySelector("#boxes")
const createCollection=enter.querySelector("[data-create]")
const destroyCollection=enter.querySelector("[data-destroy]")

const sum = () => {
  createBoxes(input.value);
}
const createBoxes = function (amount) {

  // amount=input.value;
  // console.log(input.value);
  let startSize=30;
  for(let i=0;i<amount;i+=1){

  const sizeEl=startSize+i*10;
  // let el=document.createElement("div")
  // el.style.width=sizeEl+"px";
  // el.style.height=sizeEl+"px";
  // el.style.backgroundColor=getRandomHexColor();
  // el.style.borderRadius="50%";
const el=`<div style="width: ${sizeEl}px; height: ${sizeEl}px; background-color: ${getRandomHexColor()}; border-radius: 50%;"></div>`
  boxes.insertAdjacentHTML("beforeend",el);

  }
}
const destroyBoxes=()=>{
  boxes.innerHTML="";
input.value=""}

createCollection.addEventListener("click",sum)

destroyCollection.addEventListener("click",destroyBoxes)
