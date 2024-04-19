const forms = document.querySelector('form')

forms.addEventListener('submit', (event) => {
    
    const user = event.target.querySelector('input[name=email]').value
    const password = event.target.querySelector('input[name=pass]').value

    if(user === "laeciofillho@gmail.com" && password === "12345678"){
    }else{ 
        event.preventDefault()    
        alert("Dados incorretos!")
    }
})



