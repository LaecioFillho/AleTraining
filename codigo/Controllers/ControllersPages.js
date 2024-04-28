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

//Visibilidade dos Gifs 'Geral'

const gifs = [...document.querySelectorAll('.gifs-warraper')]
const [
    gifSeg1,gifSeg2,gifSeg3,gifSeg4,gifSeg5,gifSeg6,gifSeg7,gifTer8,
    gifTer9,gifTer10,gifTer11,gifTer12,gifTer13,gifTer14,gifQua15,gifQua16,
    gifQua17,gifQua18,gifQua19,gifQua20,gifQua21,gifQui22,gifQui23,gifQui24,
    gifQui25,gifQui26,gifQui27,gifQui28,gifQui29,gifSex30,gifSex31,gifSex32,gifSex33,gifSex34,gifSex35,gifSex36,gifSex37] = gifs

//Segunda-Feira
const butonsExerSegunda = [...document.querySelectorAll('.Segunda')]
const [btnS1,btnS2,btnS3,btnS4,btnS5,btnS6,btnS7] = butonsExerSegunda

//Terça-Feira
const butonsExerTerca = [...document.querySelectorAll('.Terca')]
const [btnT1,btnT2,btnT3,btnT4,btnT5,btnT6,btnT7] = butonsExerTerca

//Quarta-Feira
const butonsExerQuarta = [...document.querySelectorAll('.Quarta')]
const [btnQua1,btnQua2,btnQua3,btnQua4,btnQua5,btnQua6,btnQua7,btnQua8] = butonsExerQuarta

//Quinta-Feira
const butonsExerQuinta = [...document.querySelectorAll('.Quinta')]
const [btnQ1,btnQ2,btnQ3,btnQ4,btnQ5,btnQ6,btnQ7,btnQ8] = butonsExerQuinta

//Sexta-Feira
const butonsExerSexta = [...document.querySelectorAll('.Sexta')]
const [btnSex1,btnSex2,btnSex3,btnSex4,btnSex5,btnSex6,btnSex7,btnSex8] = butonsExerSexta

//Segunda-Feira
btnS1.addEventListener('click', () => {
    if(gifSeg1.style.display === 'none'){
        gifSeg1.style.display = 'block'
    }else{
        gifSeg1.style.display = 'none'
    }
})

btnS2.addEventListener('click', () => {
    if(gifSeg2.style.display === 'none'){
        gifSeg2.style.display = 'block'
    }else{
        gifSeg2.style.display = 'none'
    }
})

btnS3.addEventListener('click', () => {
    if(gifSeg3.style.display === 'none'){
        gifSeg3.style.display = 'block'
    }else{
        gifSeg3.style.display = 'none'
    }
})

btnS4.addEventListener('click', () => {
    if(gifSeg4.style.display === 'none'){
        gifSeg4.style.display = 'block'
    }else{
        gifSeg4.style.display = 'none'
    }
})

btnS5.addEventListener('click', () => {
    if(gifSeg5.style.display === 'none'){
        gifSeg5.style.display = 'block'
    }else{
        gifSeg5.style.display = 'none'
    }
})

btnS6.addEventListener('click', () => {
    if(gifSeg6.style.display === 'none'){
        gifSeg6.style.display = 'block'
    }else{
        gifSeg6.style.display = 'none'
    }
})

btnS7.addEventListener('click', () => {
    if(gifSeg7.style.display === 'none'){
        gifSeg7.style.display = 'block'
    }else{
        gifSeg7.style.display = 'none'
    }
})

//Terça-Feira
btnT1.addEventListener('click', () => {
    if(gifTer8.style.display === 'none'){
        gifTer8.style.display = 'block'
    }else{
        gifTer8.style.display = 'none'
    }
})

btnT2.addEventListener('click', () => {
    if(gifTer9.style.display === 'none'){
        gifTer9.style.display = 'block'
    }else{
        gifTer9.style.display = 'none'
    }
})

btnT3.addEventListener('click', () => {
    if(gifTer10.style.display === 'none'){
        gifTer10.style.display = 'block'
    }else{
        gifTer10.style.display = 'none'
    }
})

btnT4.addEventListener('click', () => {
    if(gifTer11.style.display === 'none'){
        gifTer11.style.display = 'block'
    }else{
        gifTer11.style.display = 'none'
    }
})

btnT5.addEventListener('click', () => {
    if(gifTer12.style.display === 'none'){
        gifTer12.style.display = 'block'
    }else{
        gifTer12.style.display = 'none'
    }
})

btnT6.addEventListener('click', () => {
    if(gifTer13.style.display === 'none'){
        gifTer13.style.display = 'block'
    }else{
        gifTer13.style.display = 'none'
    }
})

btnT7.addEventListener('click', () => {
    if(gifTer14.style.display === 'none'){
        gifTer14.style.display = 'block'
    }else{
        gifTer14.style.display = 'none'
    }
})

//Quarta-Feira
btnQua1.addEventListener('click', () => {
    if(gifQua15.style.display === 'none'){
        gifQua15.style.display = 'block'
    }else{
        gifQua15.style.display = 'none'
    }
})

btnQua2.addEventListener('click', () => {
    if(gifQua16.style.display === 'none'){
        gifQua16.style.display = 'block'
    }else{
        gifQua16.style.display = 'none'
    }
})

btnQua3.addEventListener('click', () => {
    if(gifQua17.style.display === 'none'){
        gifQua17.style.display = 'block'
    }else{
        gifQua17.style.display = 'none'
    }
})

btnQua4.addEventListener('click', () => {
    if(gifQua18.style.display === 'none'){
        gifQua18.style.display = 'block'
    }else{
        gifQua18.style.display = 'none'
    }
})

btnQua5.addEventListener('click', () => {
    if(gifQua19.style.display === 'none'){
        gifQua19.style.display = 'block'
    }else{
        gifQua19.style.display = 'none'
    }
})

btnQua6.addEventListener('click', () => {
    if(gifQua20.style.display === 'none'){
        gifQua20.style.display = 'block'
    }else{
        gifQua20.style.display = 'none'
    }
})

btnQua7.addEventListener('click', () => {
    if(gifQua21.style.display === 'none'){
        gifQua21.style.display = 'block'
    }else{
        gifQua21.style.display = 'none'
    }
})

btnQua8.addEventListener('click', () => {
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

//Sexta-Feira

const closedGifs = [...document.querySelectorAll('.closedGif')]
const [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,
    c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35,
    c36,c37] = closedGifs

//Segunda-Feira
c1.addEventListener('click', () => {
    gifSeg1.style.display = 'none'
})
c2.addEventListener('click', () => {
    gifSeg2.style.display = 'none'
})
c3.addEventListener('click', () => {
    gifSeg3.style.display = 'none'
})
c4.addEventListener('click', () => {
    gifSeg4.style.display = 'none'
})
c5.addEventListener('click', () => {
    gifSeg5.style.display = 'none'
})
c6.addEventListener('click', () => {
    gifSeg6.style.display = 'none'
})
c7.addEventListener('click', () => {
    gifSeg7.style.display = 'none'
})


//Terça-Feira
c8.addEventListener('click', () => {
    gifTer8.style.display = 'none'
})
c9.addEventListener('click', () => {
    gifTer9.style.display = 'none'
})
c10.addEventListener('click', () => {
    gifTer10.style.display = 'none'
})
c11.addEventListener('click', () => {
    gifTer11.style.display = 'none'
})
c12.addEventListener('click', () => {
    gifTer12.style.display = 'none'
})
c13.addEventListener('click', () => {
    gifTer13.style.display = 'none'
})
c14.addEventListener('click', () => {
    gifTer14.style.display = 'none'
})


//Quarta-Feira
c15.addEventListener('click', () => {
    gifQua15.style.display = 'none'
})
c16.addEventListener('click', () => {
    gifQua16.style.display = 'none'
})
c17.addEventListener('click', () => {
    gifQua17.style.display = 'none'
})
c18.addEventListener('click', () => {
    gifQua18.style.display = 'none'
})
c19.addEventListener('click', () => {
    gifQua19.style.display = 'none'
})
c20.addEventListener('click', () => {
    gifQua20.style.display = 'none'
})
c21.addEventListener('click', () => {
    gifQua21.style.display = 'none'
})


//Quinta-Feira
c22.addEventListener('click', () => {
    gifQui22.style.display = 'none'
})
c23.addEventListener('click', () => {
    gifQui23.style.display = 'none'
})
c24.addEventListener('click', () => {
    gifQui24.style.display = 'none'
})
c25.addEventListener('click', () => {
    gifQui25.style.display = 'none'
})
c26.addEventListener('click', () => {
    gifQui26.style.display = 'none'
})
c27.addEventListener('click', () => {
    gifQui27.style.display = 'none'
})
c28.addEventListener('click', () => {
    gifQui28.style.display = 'none'
})
c29.addEventListener('click', () => {
    gifQui29.style.display = 'none'
})


//Sexta-Feira
c30.addEventListener('click', () => {
    gifSex30.style.display = 'none'
})
c31.addEventListener('click', () => {
    gifSex31.style.display = 'none'
})
c32.addEventListener('click', () => {
    gifSex32.style.display = 'none'
})
c33.addEventListener('click', () => {
    gifSex33.style.display = 'none'
})
c34.addEventListener('click', () => {
    gifSex34.style.display = 'none'
})
c35.addEventListener('click', () => {
    gifSex35.style.display = 'none'
})
c36.addEventListener('click', () => {
    gifSex36.style.display = 'none'
})
c37.addEventListener('click', () => {
    gifSex37.style.display = 'none'
})
