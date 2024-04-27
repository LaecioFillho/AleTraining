const buttons = [...document.querySelectorAll('.icons-warraper')]
const [btn1,btn2,btn3,btn4,btn5] = buttons

const pages = [...document.querySelectorAll('.sub-pages')]
const [page1,page2,page3,page4,page5] = pages


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

//Segunda-Feira

//Terça-Feira

//Quarta-Feira

const gifs = [...document.querySelectorAll('.gifs-warraper')]
const [gifSeg1,gifSeg2,gifSeg3,gifSeg4,gifSeg5,gifSeg6,gifSeg7,gifTer8,
    gifTer9,gifTer10,gifTer11,gifTer12,gifTer13,gifTer14,gifQua15,gifQua16,
    gifQua17,gifQua18,gifQua19,gifQua20,gifQua21,gifQui22,gifQui23,gifQui24,gifQui25,gifQui26,gifQui27,gifQui28,gifQui29] = gifs

//Segunda-Feira
const btnEx1 = document.querySelector('.exSegunda1')
const btnEx2 = document.querySelector('.exSegunda2')
const btnEx3 = document.querySelector('.exSegunda3')
const btnEx4 = document.querySelector('.exSegunda4')
const btnEx5 = document.querySelector('.exSegunda5')
const btnEx6 = document.querySelector('.exSegunda6')
const btnEx7 = document.querySelector('.exSegunda7')

//Terça-Feira
const btnEx8 = document.querySelector('.exTerca1')
const btnEx9 = document.querySelector('.exTerca2')
const btnEx10 = document.querySelector('.exTerca3')
const btnEx11 = document.querySelector('.exTerca4')
const btnEx12 = document.querySelector('.exTerca5')
const btnEx13 = document.querySelector('.exTerca6')
const btnEx14 = document.querySelector('.exTerca7')

//Quarta-Feira
const btnEx15 = document.querySelector('.exQuarta1')
const btnEx16 = document.querySelector('.exQuarta2')
const btnEx17 = document.querySelector('.exQuarta3')
const btnEx18 = document.querySelector('.exQuarta4')
const btnEx19 = document.querySelector('.exQuarta5')
const btnEx20 = document.querySelector('.exQuarta6')
const btnEx21 = document.querySelector('.exQuarta7')
const btnEx22 = document.querySelector('.exQuarta8')


//Quinta-Feira
const butonsExerQuinta = [...document.querySelectorAll('.Quinta')]
const [btnQ1,btnQ2,btnQ3,btnQ4,btnQ5,btnQ6,btnQ7,btnQ8] = butonsExerQuinta

//Segunda-Feira
btnEx1.addEventListener('click', () => {
    if(gifSeg1.style.display === 'none'){
        gifSeg1.style.display = 'block'
    }else{
        gifSeg1.style.display = 'none'
    }
})

btnEx2.addEventListener('click', () => {
    if(gifSeg2.style.display === 'none'){
        gifSeg2.style.display = 'block'
    }else{
        gifSeg2.style.display = 'none'
    }
})

btnEx3.addEventListener('click', () => {
    if(gifSeg3.style.display === 'none'){
        gifSeg3.style.display = 'block'
    }else{
        gifSeg3.style.display = 'none'
    }
})

btnEx4.addEventListener('click', () => {
    if(gifSeg4.style.display === 'none'){
        gifSeg4.style.display = 'block'
    }else{
        gifSeg4.style.display = 'none'
    }
})

btnEx5.addEventListener('click', () => {
    if(gifSeg5.style.display === 'none'){
        gifSeg5.style.display = 'block'
    }else{
        gifSeg5.style.display = 'none'
    }
})

btnEx6.addEventListener('click', () => {
    if(gifSeg6.style.display === 'none'){
        gifSeg6.style.display = 'block'
    }else{
        gifSeg6.style.display = 'none'
    }
})

btnEx7.addEventListener('click', () => {
    if(gifSeg7.style.display === 'none'){
        gifSeg7.style.display = 'block'
    }else{
        gifSeg7.style.display = 'none'
    }
})

//Terça-Feira
btnEx8.addEventListener('click', () => {
    if(gifTer8.style.display === 'none'){
        gifTer8.style.display = 'block'
    }else{
        gifTer8.style.display = 'none'
    }
})

btnEx9.addEventListener('click', () => {
    if(gifTer9.style.display === 'none'){
        gifTer9.style.display = 'block'
    }else{
        gifTer9.style.display = 'none'
    }
})

btnEx10.addEventListener('click', () => {
    if(gifTer10.style.display === 'none'){
        gifTer10.style.display = 'block'
    }else{
        gifTer10.style.display = 'none'
    }
})

btnEx11.addEventListener('click', () => {
    if(gifTer11.style.display === 'none'){
        gifTer11.style.display = 'block'
    }else{
        gifTer11.style.display = 'none'
    }
})

btnEx12.addEventListener('click', () => {
    if(gifTer12.style.display === 'none'){
        gifTer12.style.display = 'block'
    }else{
        gifTer12.style.display = 'none'
    }
})

btnEx13.addEventListener('click', () => {
    if(gifTer13.style.display === 'none'){
        gifTer13.style.display = 'block'
    }else{
        gifTer13.style.display = 'none'
    }
})

btnEx14.addEventListener('click', () => {
    if(gifTer14.style.display === 'none'){
        gifTer14.style.display = 'block'
    }else{
        gifTer14.style.display = 'none'
    }
})

//Quarta-Feira
btnEx15.addEventListener('click', () => {
    if(gifQua15.style.display === 'none'){
        gifQua15.style.display = 'block'
    }else{
        gifQua15.style.display = 'none'
    }
})

btnEx16.addEventListener('click', () => {
    if(gifQua16.style.display === 'none'){
        gifQua16.style.display = 'block'
    }else{
        gifQua16.style.display = 'none'
    }
})

btnEx17.addEventListener('click', () => {
    if(gifQua17.style.display === 'none'){
        gifQua17.style.display = 'block'
    }else{
        gifQua17.style.display = 'none'
    }
})

btnEx18.addEventListener('click', () => {
    if(gifQua18.style.display === 'none'){
        gifQua18.style.display = 'block'
    }else{
        gifQua18.style.display = 'none'
    }
})

btnEx19.addEventListener('click', () => {
    if(gifQua19.style.display === 'none'){
        gifQua19.style.display = 'block'
    }else{
        gifQua19.style.display = 'none'
    }
})

btnEx20.addEventListener('click', () => {
    if(gifQua20.style.display === 'none'){
        gifQua20.style.display = 'block'
    }else{
        gifQua20.style.display = 'none'
    }
})

btnEx21.addEventListener('click', () => {
    if(gifQua21.style.display === 'none'){
        gifQua21.style.display = 'block'
    }else{
        gifQua21.style.display = 'none'
    }
})

btnEx22.addEventListener('click', () => {
    if(gifQua22.style.display === 'none'){
        gifQua22.style.display = 'block'
    }else{
        gifQua22.style.display = 'none'
    }
})

//Quinta-Feira
btnQ1.addEventListener('click', () => {
    if(gifQui22.style.display === 'none'){
        gifQui22.style.display = 'block'
    }else{
        gifQui22.style.display = 'none'
    }
})

btnQ2.addEventListener('click', () => {
    if(gifQui23.style.display === 'none'){
        gifQui23.style.display = 'block'
    }else{
        gifQui23.style.display = 'none'
    }
})

btnQ3.addEventListener('click', () => {
    if(gifQui24.style.display === 'none'){
        gifQui24.style.display = 'block'
    }else{
        gifQui24.style.display = 'none'
    }
})

btnQ4.addEventListener('click', () => {
    if(gifQui25.style.display === 'none'){
        gifQui25.style.display = 'block'
    }else{
        gifQui25.style.display = 'none'
    }
})

btnQ5.addEventListener('click', () => {
    if(gifQui26.style.display === 'none'){
        gifQui26.style.display = 'block'
    }else{
        gifQui26.style.display = 'none'
    }
})

btnQ6.addEventListener('click', () => {
    if(gifQui27.style.display === 'none'){
        gifQui27.style.display = 'block'
    }else{
        gifQui27.style.display = 'none'
    }
})

btnQ7.addEventListener('click', () => {
    if(gifQui28.style.display === 'none'){
        gifQui28.style.display = 'block'
    }else{
        gifQui28.style.display = 'none'
    }
})

btnQ8.addEventListener('click', () => {
    if(gifQui29.style.display === 'none'){
        gifQui29.style.display = 'block'
    }else{
        gifQui29.style.display = 'none'
    }
})

const closedOne = document.querySelector('.C-one')
const closedTwo = document.querySelector('.C-two')
const closedThree = document.querySelector('.C-three')
const closedFour = document.querySelector('.C-four')
const closedFive = document.querySelector('.C-five')
const closedSix = document.querySelector('.C-six')
const closedSeven = document.querySelector('.C-seven')
const closedEigth = document.querySelector('.C-eigth')
const closedNine = document.querySelector('.C-nine')
const closedTen = document.querySelector('.C-ten')
const closedEleven = document.querySelector('.C-eleven')
const closedTwelve = document.querySelector('.C-twelve')
const closedThirteen = document.querySelector('.C-thirteen')
const closedFourteen = document.querySelector('.C-fourteen')
const closedFifteen = document.querySelector('.C-fifteen')
const closedSixteen = document.querySelector('.C-sixteen')
const closedSeventeen = document.querySelector('.C-seventeen')
const closedEighteen = document.querySelector('.C-eighteen')
const closedNineteen = document.querySelector('.C-nineteen')
const closedTwenty = document.querySelector('.C-twenty')
const closedTwentyOne = document.querySelector('.C-twenty-one')
const closedTwentyTwo = document.querySelector('.C-twenty-two')
const closedTwentyThree = document.querySelector('.C-twenty-three')


//Segunda-Feira
closedOne.addEventListener('click', () => {
    gifSeg1.style.display = 'none'
})

closedTwo.addEventListener('click', () => {
    gifSeg2.style.display = 'none'
})
closedThree.addEventListener('click', () => {
    gifSeg3.style.display = 'none'
})

closedFour.addEventListener('click', () => {
    gifSeg4.style.display = 'none'
})

closedFive.addEventListener('click', () => {
    gifSeg5.style.display = 'none'
})

closedSix.addEventListener('click', () => {
    gifSeg6.style.display = 'none'
})

closedSeven.addEventListener('click', () => {
    gifSeg7.style.display = 'none'
})


//Terça-Feira
closedEigth.addEventListener('click', () => {
    gifEigth.style.display = 'none'
})

closedNine.addEventListener('click', () => {
    gifNine.style.display = 'none'
})

closedTen.addEventListener('click', () => {
    gifTen.style.display = 'none'
})

closedEleven.addEventListener('click', () => {
    gifEleven.style.display = 'none'
})

closedThirteen.addEventListener('click', () => {
    gifThirteen.style.display = 'none'
})

closedFourteen.addEventListener('click', () => {
    gifFourteen.style.display = 'none'
})

closedFifteen.addEventListener('click', () => {
    gifFifteen.style.display = 'none'
})


//Quarta-Feira
closedSixteen.addEventListener('click', () => {
    gifSixteen.style.display = 'none'
})
closedSeventeen.addEventListener('click', () => {
    gifSeventeen.style.display = 'none'
})
closedEighteen.addEventListener('click', () => {
    gifEighteen.style.display = 'none'
})
closedNineteen.addEventListener('click', () => {
    gifNineteen.style.display = 'none'
})
closedTwenty.addEventListener('click', () => {
    gifTwenty.style.display = 'none'
})
closedTwentyOne.addEventListener('click', () => {
    gifTwentyOne.style.display = 'none'
})
closedTwentyTwo.addEventListener('click', () => {
    gifTwentyTwo.style.display = 'none'
})
closedTwentyThree.addEventListener('click', () => {
    gifTwentyThree.style.display = 'none'
})


//Quinta-Feira


//Sexta-Feira
