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

//Segunda-Feira
const gifOne = document.querySelector('.gifs-warraper')
const gifTwo = document.querySelector('.gif2')
const gifThree = document.querySelector('.gif3')
const gifFour = document.querySelector('.gif4')
const gifFive = document.querySelector('.gif5')
const gifSix = document.querySelector('.gif6')
const gifSeven = document.querySelector('.gif7')

//Terça-Feira
const gifEigth = document.querySelector('.gif8')
const gifNine = document.querySelector('.gif9')
const gifTen = document.querySelector('.gif10')
const gifEleven = document.querySelector('.gif11')
const gifTwelve = document.querySelector('.gif12')
const gifThirteen = document.querySelector('.gif13')
const gifFourteen = document.querySelector('.gif14')
const gifFifteen = document.querySelector('.gif15')

//Quarta-Feira
const gifSixteen = document.querySelector('.gif16')
const gifSeventeen = document.querySelector('.gif17')
const gifEighteen = document.querySelector('.gif18')
const gifNineteen = document.querySelector('.gif19')
const gifTwenty = document.querySelector('.gif20')
const gifTwentyOne = document.querySelector('.gif21')
const gifTwentyTwo = document.querySelector('.gif22')
const gifTwentyThree = document.querySelector('.gif23')

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


//Segunda-Feira
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


//Terça-Feira
btnEx8.addEventListener('click', () => {
    if(gifEigth.style.display === 'none'){
        gifEigth.style.display = 'block'
    }else{
        gifEigth.style.display = 'none'
    }
})

btnEx9.addEventListener('click', () => {
    if(gifNine.style.display === 'none'){
        gifNine.style.display = 'block'
    }else{
        gifNine.style.display = 'none'
    }
})

btnEx10.addEventListener('click', () => {
    if(gifTen.style.display === 'none'){
        gifTen.style.display = 'block'
    }else{
        gifTen.style.display = 'none'
    }
})

btnEx11.addEventListener('click', () => {
    if(gifEleven.style.display === 'none'){
        gifEleven.style.display = 'block'
    }else{
        gifEleven.style.display = 'none'
    }
})

btnEx12.addEventListener('click', () => {
    if(gifTwelve.style.display === 'none'){
        gifTwelve.style.display = 'block'
    }else{
        gifTwelve.style.display = 'none'
    }
})

btnEx13.addEventListener('click', () => {
    if(gifThirteen.style.display === 'none'){
        gifThirteen.style.display = 'block'
    }else{
        gifThirteen.style.display = 'none'
    }
})

btnEx14.addEventListener('click', () => {
    if(gifFourteen.style.display === 'none'){
        gifFourteen.style.display = 'block'
    }else{
        gifFourteen.style.display = 'none'
    }
})


//Quarta-Feira
btnEx15.addEventListener('click', () => {
    if(gifFifteen.style.display === 'none'){
        gifFifteen.style.display = 'block'
    }else{
        gifFifteen.style.display = 'none'
    }
})

btnEx16.addEventListener('click', () => {
    if(gifSixteen.style.display === 'none'){
        gifSixteen.style.display = 'block'
    }else{
        gifSixteen.style.display = 'none'
    }
})

btnEx17.addEventListener('click', () => {
    if(gifSeventeen.style.display === 'none'){
        gifSeventeen.style.display = 'block'
    }else{
        gifSeventeen.style.display = 'none'
    }
})

btnEx18.addEventListener('click', () => {
    if(gifEighteen.style.display === 'none'){
        gifEighteen.style.display = 'block'
    }else{
        gifEighteen.style.display = 'none'
    }
})

btnEx19.addEventListener('click', () => {
    if(gifNineteen.style.display === 'none'){
        gifNineteen.style.display = 'block'
    }else{
        gifNineteen.style.display = 'none'
    }
})

btnEx20.addEventListener('click', () => {
    if(gifTwenty.style.display === 'none'){
        gifTwenty.style.display = 'block'
    }else{
        gifTwenty.style.display = 'none'
    }
})

btnEx21.addEventListener('click', () => {
    if(gifTwentyOne.style.display === 'none'){
        gifTwentyOne.style.display = 'block'
    }else{
        gifTwentyOne.style.display = 'none'
    }
})

btnEx22.addEventListener('click', () => {
    if(gifTwentyTwo.style.display === 'none'){
        gifTwentyTwo.style.display = 'block'
    }else{
        gifTwentyTwo.style.display = 'none'
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

