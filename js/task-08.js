const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", forSubmit)

function forSubmit(event){
    event.preventDefault();
    // const {
    //     elements: { email, password }
    //   } = event.currentTarget;
    const formData = new FormData(event.currentTarget)
    
      if (event.currentTarget.value === "" || event.currentTarget.value === "") {
        return alert("Please fill in all the fields!");
      }
      console.log(`email: ${event.currentTarget.email.value} password: ${event.currentTarget.password.value}    `)
    
    event.currentTarget.reset();
}
