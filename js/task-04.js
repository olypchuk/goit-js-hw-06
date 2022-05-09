let counterValue =0;
const step=1;
const container =document.querySelector('#counter');
const incrButton=document.querySelector('[data-action="increment"]');
const decrButton=document.querySelector('[data-action="decrement"]');
const valueItem=document.querySelector('#value');
console.log(container);

incrButton.addEventListener('click', () => {
    counterValue+=step;
valueItem.textContent=counterValue;

});
decrButton.addEventListener('click', () => {
    counterValue-=step;
    valueItem.textContent=counterValue;
    
       });


