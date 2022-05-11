let counterValue =0;
const step=1;

const incrButton=document.querySelector('[data-action="increment"]');
const decrButton=document.querySelector('[data-action="decrement"]');
const valueItem=document.querySelector('#value');


incrButton.addEventListener('click', () => {
    counterValue+=step;
valueItem.textContent=counterValue;

});
decrButton.addEventListener('click', () => {
    counterValue-=step;
    valueItem.textContent=counterValue;
    
       });


