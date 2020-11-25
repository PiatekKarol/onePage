document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navi__items')
const hamburgerBtn = document.querySelector(".hamburger")
const allNaviItems = document.querySelectorAll('.navi__item')
const navShadow = document.querySelector('.header-wrapper')

// // SHOW MENU
const handleNavi = () => {
    nav.classList.toggle('showNavi')

    allNaviItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('showNavi')
        })
    })
    
}
hamburgerBtn.addEventListener('click', handleNavi)

// // SHADOW NAVI
function addShadowNavi(){
    if (window.scrollY >= 20){
        navShadow.classList.add('shadow-bg')
    }else{
        navShadow.classList.remove('shadow-bg')
    }
}
window.addEventListener('scroll',addShadowNavi)

})