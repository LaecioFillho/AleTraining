const gifOne = document.querySelector('.gif1')
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


const closed1 = document.querySelector('.C-one')
const closed2 = document.querySelector('.C-two')
const closed3 = document.querySelector('.C-three')
const closed4 = document.querySelector('.C-four')
const closed5 = document.querySelector('.C-five')
const closed6 = document.querySelector('.C-six')
const closed7 = document.querySelector('.C-seven')

closed1.addEventListener('click', () => {
    gifOne.style.display = 'none'
})

closed2.addEventListener('click', () => {
    gifTwo.style.display = 'none'
})
closed3.addEventListener('click', () => {
    gifThree.style.display = 'none'
})

closed4.addEventListener('click', () => {
    gifFour.style.display = 'none'
})

closed5.addEventListener('click', () => {
    gifFive.style.display = 'none'
})

closed6.addEventListener('click', () => {
    gifSix.style.display = 'none'
})

closed7.addEventListener('click', () => {
    gifSeven.style.display = 'none'
})