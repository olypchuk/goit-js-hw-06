const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl=document.querySelector("ul#ingredients");


const createEls = ()=>{
  let arr=[];
  ingredients.forEach(elem => {
    const el = document.createElement('li');
    el.textContent = elem;
    el.classList.add("item");
    
    arr.push(el);
  })
  listEl.append(...arr)

}

createEls()