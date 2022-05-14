const list =document.querySelector('#categories');
const listItems = list.querySelectorAll('li.item');
 console.log(`Number of categories :${listItems.length}`);

const amount = () => {
  for (let item of listItems) {
    const firstEl = item.firstElementChild;
    const lastEl = item.lastElementChild;

  console.log("Category :",firstEl.textContent);
  console.log("Elements:",lastEl.children.length);
    }   
 
}
amount()





