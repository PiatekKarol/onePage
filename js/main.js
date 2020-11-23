document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.nav')
const navMobile = document.querySelector(".nav-mobile")
const hamburgerBtn = document.querySelector(".hamburger-btn")
const allNavItems = document.querySelectorAll('.nav-mobile__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
// SHOW MENU
const handleNav = () => {
    navMobile.classList.toggle('show')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('show')
        })
    })
}
// SHADOW NAVI
function addShadow(){
    if (window.scrollY >= 20){
        nav.classList.add('shadow-bg')
    }else{
        nav.classList.remove('shadow-bg')
    }
}
window.addEventListener('scroll',addShadow)
hamburgerBtn.addEventListener('click', handleNav);

})