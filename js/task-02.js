const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const ingredientsEls = [...ingredients].map(element => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = element;
  return ingredientsEl;
})

ingredientsRef.append(...ingredientsEls)

console.log(ingredientsRef)

