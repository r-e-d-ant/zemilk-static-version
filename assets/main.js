
const navbar = document.querySelector('.navbar')
const menuOpen = document.querySelector('.bx-menu')
const menuClose = document.querySelector('.bx-x')

menuOpen.addEventListener('click', () => {
    if(!navbar.classList.contains('showMenu')) {
        navbar.classList.toggle('showMenu')
        menuOpen.classList.toggle('hide')
        menuClose.classList.toggle('showClose')
    }
})

menuClose.addEventListener('click', () => {
    if(navbar.classList.contains('showMenu')) {
        navbar.classList.remove('showMenu')
        menuOpen.classList.remove('hide')
        menuClose.classList.remove('showClose')
    }
})