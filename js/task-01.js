const list =document.querySelector('#categories');

const listItems = list.querySelectorAll('li.item');
 console.log(`Number of categories :${listItems.length}`);


const amount = () => {
    for (let item of listItems) {
  console.log("Category :",item.querySelector('h2').textContent);
  console.log("Elements:",item.querySelectorAll("ul>li").length);
    }   
 
}
amount()





