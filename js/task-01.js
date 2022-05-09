// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
 const list =document.querySelector('#categories');

 const listItems=list.querySelectorAll('li.item');
 console.log(`Number of categories :${listItems.length}`);
 const listEls=list.querySelector('li.item');

 const first=list.querySelector('h2').textContent;
 console.log(`Category: ${first}`);
 const amountFirstEls=listEls.querySelectorAll('li')
 console.log(`Elements:${amountFirstEls.length}`);

const secondEl=listEls.nextElementSibling.querySelector('h2').textContent;
console.log(`Category: ${secondEl}`);
const amountSecondEls=listEls.nextElementSibling.querySelectorAll('li')
console.log(`Elements:${amountSecondEls.length}`);

const thirdEl=list.lastElementChild.querySelector('h2').textContent;
console.log(`Category: ${thirdEl}`);

const amountThirdEls=list.lastElementChild.querySelectorAll('li')
console.log(`Elements:${amountThirdEls.length}`);




