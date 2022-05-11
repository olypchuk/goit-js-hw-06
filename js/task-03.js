const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const arrImages=document.querySelector("ul.gallery");

const image = images.map(el => `<li><img width="350" src ="${el.url}" alt="${el.alt}"}></li>` )


arrImages.insertAdjacentHTML("afterbegin",image);
console.log(arrImages.children);
const imageEl=document.querySelector("li");
arrImages.style.display="flex";
arrImages.style.justifyContent="center"
imageEl.nextElementSibling.style.display="flex";
imageEl.nextElementSibling.style.margin="10px"
imageEl.style.display="flex";
imageEl.style.margin="10px"
arrImages.lastElementChild.style.display="flex";
arrImages.lastElementChild.style.margin="10px"
arrImages.style.listStyle="none";
arrImages.style.margin="-20px";



