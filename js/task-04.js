const valueRefInc = document.querySelector('button[data-action="increment"]');
const valueRefDec = document.querySelector('button[data-action = "decrement"]');
let counterValue = document.querySelector('#value')


    valueRefInc.addEventListener('click', () =>{
        counterValue.textContent++ 
    })

    valueRefDec.addEventListener('click', () =>{
        counterValue.textContent--;
    })


