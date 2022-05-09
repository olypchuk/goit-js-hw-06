const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl=document.querySelector("ul#ingredients");

// const el1=document.createElement('li');
// el1.textContent="Potatoes"
// const el2=document.createElement('li');
// el2.textContent="Mushrooms"
// const el3=document.createElement('li');
// el3.textContent="Garlic"
// const el4=document.createElement('li');
// el4.textContent="Tomatos"

// const el5=document.createElement('li');
// el5.textContent="Herbs"
// const el6=document.createElement('li');
// el6.textContent="Condiments"
// el1.classList.add('item');
// listEl.append(el1,el2,el3,el4,el5,el6);

const createEls=(el,textContent)=>{
  el=document.createElement('li');
  el.textContent=textContent;
el.classList.add("item");
return el
}
const el1 =createEls(1,"Potatoes");
const el2 =createEls(2,"Mushrooms");
const el3 =createEls(3,"Garlic");
const el4 =createEls(4,"Tomatos");
const el5 =createEls(5,"Herbs");
const el6 =createEls(6,"Condiments");
listEl.append(el1,el2,el3,el4,el5,el6);
