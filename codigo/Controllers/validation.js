import {dados} from '../Controllers/dataid.js'

const forms = document.querySelector('.forms')
const nameUser = document.querySelector('.saud')

//function altUser(){
  //  nameUser.textContent = "Olá Laécio, Vamos treinar?"
//}

forms.addEventListener('submit', (event) => {

    const user = event.target.querySelector('input[name=email]').value
    const password = event.target.querySelector('input[name=pass]').value

    if(user === "laeciofillho@gmail.com" && password === "1234567"){
        nameUser.innerHTML = "Olá Junior, Vamos treinar?"
        dados()
    }else{
        event.preventDefault()
        alert("Dados incorretos! Ou dados não autorizados!")
    }
})
