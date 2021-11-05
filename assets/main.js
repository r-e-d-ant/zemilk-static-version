
// Navigation bar toggling

const navbar = document.querySelector('.navbar')
const menuOpen = document.querySelector('.bx-menu')
const menuClose = document.querySelector('.bx-x')

// Open Menu
menuOpen.addEventListener('click', () => {
    /*
    check if showMenu class in not in navbar
    If not show it
    */
    if(!navbar.classList.contains('showMenu')) {
        navbar.classList.toggle('showMenu')
        menuOpen.classList.toggle('hide')
        menuClose.classList.toggle('showClose')
    }
})

// Close menu
menuClose.addEventListener('click', () => {
    /*
    check if showMenu class in in navbar
    If true remove it
    */
    if(navbar.classList.contains('showMenu')) {
        navbar.classList.remove('showMenu')
        menuOpen.classList.remove('hide')
        menuClose.classList.remove('showClose')
    }
})
