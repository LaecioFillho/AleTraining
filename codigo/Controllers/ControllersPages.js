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

//Visibilidade dos Gifs

const gifOne = document.querySelector('.gifs-warraper')
const gifTwo = document.querySelector('.gif2')
const gifThree = document.querySelector('.gif3')
const gifFour = document.querySelector('.gif4')
const gifFive = document.querySelector('.gif5')
const gifSix = document.querySelector('.gif6')
const gifSeven = document.querySelector('.gif7')

const btnEx1 = document.querySelector('.exSegunda1')
const btnEx2 = document.querySelector('.exSegunda2')
const btnEx3 = document.querySelector('.exSegunda3')
const btnEx4 = document.querySelector('.exSegunda4')
const btnEx5 = document.querySelector('.exSegunda5')
const btnEx6 = document.querySelector('.exSegunda6')
const btnEx7 = document.querySelector('.exSegunda7')

btnEx1.addEventListener('click', () => {
    if(gifOne.style.display === 'none'){
        gifOne.style.display = 'block'
    }else{
        gifOne.style.display = 'none'
    }
})

btnEx2.addEventListener('click', () => {
    if(gifTwo.style.display === 'none'){
        gifTwo.style.display = 'block'
    }else{
        gifTwo.style.display = 'none'
    }
})

btnEx3.addEventListener('click', () => {
    if(gifThree.style.display === 'none'){
        gifThree.style.display = 'block'
    }else{
        gifThree.style.display = 'none'
    }
})

btnEx4.addEventListener('click', () => {
    if(gifFour.style.display === 'none'){
        gifFour.style.display = 'block'
    }else{
        gifFour.style.display = 'none'
    }
})

btnEx5.addEventListener('click', () => {
    if(gifFive.style.display === 'none'){
        gifFive.style.display = 'block'
    }else{
        gifFive.style.display = 'none'
    }
})

btnEx6.addEventListener('click', () => {
    if(gifSix.style.display === 'none'){
        gifSix.style.display = 'block'
    }else{
        gifSix.style.display = 'none'
    }
})

btnEx7.addEventListener('click', () => {
    if(gifSeven.style.display === 'none'){
        gifSeven.style.display = 'block'
    }else{
        gifSeven.style.display = 'none'
    }
})

const closedOne = document.querySelector('.C-one')
const closedTwo = document.querySelector('.C-two')
const closedThree = document.querySelector('.C-three')
const closedFour = document.querySelector('.C-four')
const closedFive = document.querySelector('.C-five')
const closedSix = document.querySelector('.C-six')
const closedSeven = document.querySelector('.C-seven')

closedOne.addEventListener('click', () => {
    gifOne.style.display = 'none'
})

closedTwo.addEventListener('click', () => {
    gifTwo.style.display = 'none'
})
closedThree.addEventListener('click', () => {
    gifThree.style.display = 'none'
})

closedFour.addEventListener('click', () => {
    gifFour.style.display = 'none'
})

closedFive.addEventListener('click', () => {
    gifFive.style.display = 'none'
})

closedSix.addEventListener('click', () => {
    gifSix.style.display = 'none'
})

closedSeven.addEventListener('click', () => {
    gifSeven.style.display = 'none'
})
