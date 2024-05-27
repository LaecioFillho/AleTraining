const onSidebar = document.querySelector('.icon-menu')
const setSidebar = document.querySelector('.sidebar')

const icons = [...document.querySelectorAll('.icons-warraper')]
const [i1,i2,i3,i4,i5] = icons

const textsDays = [...document.querySelectorAll('.text')]
const [t1,t2,t3,t4,t5] = textsDays


onSidebar.addEventListener('click', () => {
    if(setSidebar.style.width === '100px'){
        setSidebar.style = `
            width: 300px;
            align-items: start;
        `
        i1.style.width = '300px'
        i2.style.width = '300px'
        i3.style.width = '300px'
        i4.style.width = '300px'
        i5.style.width = '300px'

        t1.style.display = 'block'
        t2.style.display = 'block'
        t3.style.display = 'block'
        t4.style.display = 'block'
        t5.style.display = 'block'
    } else{
        setSidebar.style.width = '100px'

        i1.style.width = '100px'
        i2.style.width = '100px'
        i3.style.width = '100px'
        i4.style.width = '100px'
        i5.style.width = '100px'

        t1.style.display = 'none'
        t2.style.display = 'none'
        t3.style.display = 'none'
        t4.style.display = 'none'
        t5.style.display = 'none'
    }
})

/* const selected = document.querySelectorAll('.icons-warraper')

selected.addEventListener('click', function() {
    if(selected.classList.contains('icons-warraper selected') == true){
        Selected.removeAttribute('class')
    }else{
        Selected.setAttribute('class', 'selected')
    }
})*/



//Calcular o IMC 

//const peso = document.getElementById('ipeso')
const peso = document.getElementById('ipeso').value
const altura = document.getElementById('ialtura').value
const btnCal = document.getElementById('buttonCalcIMC')

const printResult = document.getElementById('result')
let res = 0

function calcular() {
    res = peso + (altura * altura)
    printResult.innerHTML = "O seu IMC: " + res
}