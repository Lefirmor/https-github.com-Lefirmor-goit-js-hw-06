const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text')

inputRef.addEventListener('input', (event) => {
    inputRef.range = event.currentTarget.value;
    spanRef.style.fontSize = `${ event.currentTarget.value}px`
})