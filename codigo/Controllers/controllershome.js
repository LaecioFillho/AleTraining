const onSidebar = document.querySelector('.icon-menu')
const setSidebar = document.querySelector('.sidebar')
const setIcons = document.querySelector('.icons-warraper')
const setText = document.getElementsByClassName('text')[0]
const {t1,t2,t3} = setText

onSidebar.addEventListener('click', () => {
    if(setSidebar.style.width === '100px'){
        setSidebar.style = `
            width: 300px;
            align-items: start;
        `
        setIcons.style = `
            width: 300px;
        `
        setText.style = `
            display: block;
        `
    } else{
        setSidebar.style.width = '100px'
        setIcons.style.width = '100px'
        setText.style.display = 'none'
    }
})

const btns = document.querySelector('.one','.two','.three','.four','.five')
const {n1,n2,n3,n4,n5} = btns
const page1 = document.querySelector('.subOne')

btns.addEventListener('click', () => {
    if(page1.style.display === 'none'){
        page1.style.display = 'block'
    }else{
        page1.style.display = 'none'
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
