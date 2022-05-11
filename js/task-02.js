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
 
  ingredients.forEach(elem => {
    const el = document.createElement('li');
    el.textContent = elem;
    el.classList.add("item");
    listEl.append(el)
  })

}
createEls()