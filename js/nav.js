const navToggle = document.querySelector('.menu-button')
const nav = document.querySelector('nav')
const containerAll = document.querySelector('.container-all')

const containerAllStyle = containerAll.style
const docClasslist = document.body.classList

navToggle.addEventListener('click', _ => {
    containerAllStyle.transition = 'transform 250ms ease-in'
    docClasslist.toggle('nav-is-open')
})

nav.addEventListener('click', _ => {
    containerAllStyle.transition = '0ms' 
    docClasslist.remove('nav-is-open')
})