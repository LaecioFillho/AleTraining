const btn1 = document.querySelector('.one')
const btn2 = document.querySelector('.two')
const btn3 = document.querySelector('.three')
const btn4 = document.querySelector('.four')
const btn5 = document.querySelector('.five')


const page1 = document.querySelector('.subOne')
const page2 = document.querySelector('.subTwo')
const page3 = document.querySelector('.subThree')
const page4 = document.querySelector('.subFour')
const page5 = document.querySelector('.subFive')

btn1.addEventListener('click', () => {
    if(page1.style.display === 'none'){
        page1.style.display = 'block'
        page2.style.display = 'none'
        page3.style.display = 'none'
        page4.style.display = 'none'
        page5.style.display = 'none'
    }else{
        page1.style.display = 'none'
    }
})

btn2.addEventListener('click', () => {
    if(page2.style.display === 'none'){
        page2.style.display = 'block'
        page1.style.display = 'none'
        page3.style.display = 'none'
        page4.style.display = 'none'
        page5.style.display = 'none'
    }else{
        page2.style.display = 'none'
    }
})

btn3.addEventListener('click', () => {
    if(page3.style.display === 'none'){
        page3.style.display = 'block'
        page2.style.display = 'none'
        page1.style.display = 'none'
        page4.style.display = 'none'
        page5.style.display = 'none'
    }else{
        page3.style.display = 'none'
    }
})

btn4.addEventListener('click', () => {
    if(page4.style.display === 'none'){
        page4.style.display = 'block'
        page2.style.display = 'none'
        page3.style.display = 'none'
        page1.style.display = 'none'
        page5.style.display = 'none'
    }else{
        page4.style.display = 'none'
    }
})

btn5.addEventListener('click', () => {
    if(page5.style.display === 'none'){
        page5.style.display = 'block'
        page2.style.display = 'none'
        page3.style.display = 'none'
        page4.style.display = 'none'
        page1.style.display = 'none'
    }else{
        page5.style.display = 'none'
    }
})


const closed1 = document.querySelector('.closed-one')
const closed2 = document.querySelector('.closed-two')
const closed3 = document.querySelector('.closed-three')
const closed4 = document.querySelector('.closed-four')
const closed5 = document.querySelector('.closed-five')

closed1.addEventListener('click', () => {
    page1.style.display = 'none'
})

closed2.addEventListener('click', () => {
    page2.style.display = 'none'
})

closed3.addEventListener('click', () => {
    page3.style.display = 'none'
})

closed4.addEventListener('click', () => {
    page4.style.display = 'none'
})

closed5.addEventListener('click', () => {
    page5.style.display = 'none'
})