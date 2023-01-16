
// const categoriesRef = document.getElementById('categories');

// console.log(categoriesRef);

const categoriesRef = document.querySelectorAll('.item')
console.log("Number of categories:", categoriesRef.length)

// const categoriesItemRef = categoriesRef.forEach((element) => {
//     console.log("Category:", element.querySelector('h2').textContent)
//     console.log("Elements: ", element.querySelectorAll('li').length)
// })

const categoriesRefItem = [...categoriesRef]
    .map(element => `Category: ${element.firstElementChild.textContent}
    Elements: ${element.querySelectorAll('li').length} `)
    .join('\n')
    console.log(categoriesRefItem)





