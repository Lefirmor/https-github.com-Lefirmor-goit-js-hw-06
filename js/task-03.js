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

const imageRef = document.querySelector('.gallery')
imageRef.classList.add('list')
const imageEl = [...images].map(element =>{
  const img = document.createElement('li');
  
  img.insertAdjacentHTML('beforeend', `<img src = ${element.url} alt = ${element.alt} width = 400 height = 400>`)
  return img;
})

  imageRef.append(...imageEl);

  console.log(imageRef)


