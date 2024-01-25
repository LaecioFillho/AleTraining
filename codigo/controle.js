let btnDia = document.querySelector('.btn-dias')
let dia = document.querySelector('.dias')

let btnTreino = document.querySelector('.btn-trinos')
let treino = document.querySelector('.treinos')

let btnTipo = document.querySelector('.btn-tipos')
let tipo = document.querySelector('.tipos')

//Ação da caixa Dias

btnDia.addEventListener('click', function(){

    if (dia.style.display === 'none') {
        dia.style.display = 'block'
        treino.style.display = 'none'
        tipo.style.display = 'none'
    } else {
        dia.style.display = 'none'
    }
})

//Ação da caixa Trinos

btnTreino.addEventListener('click', function(){

    if (treino.style.display === 'none') {
        treino.style.display = 'block'
        tipo.style.display = 'none'
        dia.style.display = 'none'
    } else {
        treino.style.display = 'none'
    }
})

//Ação da caixa Tipos

btnTipo.addEventListener('click', function(){

    if (tipo.style.display === 'none') {
        tipo.style.display = 'block'
        dia.style.display = 'none'
        treino.style.display = 'none'
    } else {
        tipo.style.display = 'none'
    }
})