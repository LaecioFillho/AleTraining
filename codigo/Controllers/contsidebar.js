const onSidebar = document.querySelector('.icon-menu')
const setSidebar = document.querySelector('.sidebar')

const setIconsOne = document.querySelector('.one')
const setIconsTwo = document.querySelector('.two')
const setIconsTree = document.querySelector('.three')
const setIconsFour = document.querySelector('.four')
const setIconsFive = document.querySelector('.five')

const setTextOne = document.querySelector('.One')
const setTextTwo = document.querySelector('.Two')
const setTextThree = document.querySelector('.Three')
const setTextFour = document.querySelector('.Four')
const setTextFive = document.querySelector('.Five')

onSidebar.addEventListener('click', () => {
    if(setSidebar.style.width === '100px'){
        setSidebar.style = `
            width: 300px;
            align-items: start;
        `
        setIconsOne.style.width = '300px'
        setIconsTwo.style.width = '300px'
        setIconsTree.style.width = '300px'
        setIconsFour.style.width = '300px'
        setIconsFive.style.width = '300px'

        setTextOne.style.display = 'block'
        setTextTwo.style.display = 'block'
        setTextThree.style.display = 'block'
        setTextFour.style.display = 'block'
        setTextFive.style.display = 'block'
    } else{
        setSidebar.style.width = '100px'

        setIconsOne.style.width = '100px'
        setIconsTwo.style.width = '100px'
        setIconsTree.style.width = '100px'
        setIconsFour.style.width = '100px'
        setIconsFive.style.width = '100px'

        setTextOne.style.display = 'none'
        setTextTwo.style.display = 'none'
        setTextThree.style.display = 'none'
        setTextFour.style.display = 'none'
        setTextFive.style.display = 'none'
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
