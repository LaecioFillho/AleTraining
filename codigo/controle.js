//Declaração de Variiaveis:

//Variaveis do menu inicial:

let btnDia = document.querySelector('.btn-dias')
let dia = document.querySelector('.dias')

let btnTreino = document.querySelector('.btn-trinos')
let treino = document.querySelector('.treinos')

let btnTipo = document.querySelector('.btn-tipos')
let tipo = document.querySelector('.tipos')

let btnInicio = document.querySelector('.btn-inicio')

//Variaveis da Cx Dias:

let btnSegunda = document.querySelector('.btn-segunda')
let btnTerca = document.querySelector('.btn-terca')
let btnQuarta = document.querySelector('.btn-quarta')
let btnQuinta = document.querySelector('.btn-quinta')
let btnSexta = document.querySelector('.btn-sexta')

let diaSegunda = document.querySelector('.segunda')
let diaTerca = document.querySelector('.terca')
let diaQuarta = document.querySelector('.quarta')
let diaQuinta = document.querySelector('.quinta')
let diaSexta = document.querySelector('.sexta')

//Ação da caixa Dias:

btnDia.addEventListener('click', function(){

    if (dia.style.display === 'none') {
        
        dia.style.display = 'block'
        treino.style.display = 'none'
        tipo.style.display = 'none'

        diaSegunda.style.display = 'none'
        diaTerca.style.display = 'none'
        diaQuarta.style.display = 'none'
        diaQuinta.style.display = 'none'
        diaSexta.style.display = 'none'

    } else {
        dia.style.display = 'none'
        diaSegunda.style.display = 'none'
    }
})

//Ação da caixa Trinos:

btnTreino.addEventListener('click', function(){

    if (treino.style.display === 'none') {

        treino.style.display = 'block'
        tipo.style.display = 'none'
        dia.style.display = 'none'

        diaSegunda.style.display = 'none'
        diaTerca.style.display = 'none'
        diaQuarta.style.display = 'none'
        diaQuinta.style.display = 'none'
        diaSexta.style.display = 'none'
    } else {
        treino.style.display = 'none'
    }
})

//Ação da caixa Tipos:

btnTipo.addEventListener('click', function(){

    if (tipo.style.display === 'none') {

        tipo.style.display = 'block'
        dia.style.display = 'none'
        treino.style.display = 'none'

        diaSegunda.style.display = 'none'
        diaTerca.style.display = 'none'
        diaQuarta.style.display = 'none'
        diaQuinta.style.display = 'none'
        diaSexta.style.display = 'none'

    } else {
        tipo.style.display = 'none'
    }
})

//Ação do Botão Inicio:

btnInicio.addEventListener('click', function(){

    if(dia.style.display === 'block' || dia.style.display === 'none'|| 
    tipo.style.display === 'block' || tipo.style.display === 'none' ||
    treino.style.display === 'block' || treino.style.display === 'none'){

        dia.style.display = 'none'
        treino.style.display = 'none'
        tipo.style.display = 'none'

        diaSegunda.style.display = 'none'
        diaTerca.style.display = 'none'
        diaQuarta.style.display = 'none'
        diaQuinta.style.display = 'none'
        diaSexta.style.display = 'none'
    }
})


//Ação do menu Dias:

btnSegunda.addEventListener('click', function(){

    if (diaSegunda.style.display === 'none') {
        diaSegunda.style.display = 'block' 
        dia.style.display = 'none'      
    } else {
        diaSegunda.style.display = 'none'
    }
})

btnTerca.addEventListener('click', function(){

    if (diaTerca.style.display === 'none') {
        diaTerca.style.display = 'block' 
        dia.style.display = 'none'      
    } else {
        diaTerca.style.display = 'none'
    }
})

btnQuarta.addEventListener('click', function(){

    if (diaQuarta.style.display === 'none') {
        diaQuarta.style.display = 'block' 
        dia.style.display = 'none'      
    } else {
        diaQuarta.style.display = 'none'
    }
})

btnQuinta.addEventListener('click', function(){

    if (diaQuinta.style.display === 'none') {
        diaQuinta.style.display = 'block' 
        dia.style.display = 'none'      
    } else {
        diaQuinta.style.display = 'none'
    }
})

btnSexta.addEventListener('click', function(){

    if (diaSexta.style.display === 'none') {
        diaSexta.style.display = 'block' 
        dia.style.display = 'none'      
    } else {
        diaSexta.style.display = 'none'
    }
})