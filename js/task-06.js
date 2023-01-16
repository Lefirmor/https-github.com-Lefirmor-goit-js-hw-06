
const inputRef = document.querySelector('#validation-input');
const dataLen = Number(inputRef.dataset.length)
inputRef.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === dataLen){
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid')
    }
    else{
        inputRef.classList.add('invalid');
    }
})