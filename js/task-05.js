const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')


inputRef.addEventListener('input', () => {
    spanRef.textContent = inputRef.value;
    console.log (spanRef.textContent);

    if(inputRef.value === ""){
        spanRef.textContent = "Anonymous"
    }
})
