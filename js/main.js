document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navi__items')
const hamburgerBtn = document.querySelector(".hamburger")
const allNaviItems = document.querySelectorAll('.navi__item')
const navBtnBars = document.querySelector('.burger-btn__bars')

// function handleNavi(){
//     nav.classList.toggle('showNavi')
//     hamburgerBtn.classList.toggle('showNavi')
// }

// // SHOW MENU
const handleNavi = () => {
    nav.classList.toggle('showNavi')
    // hamburgerBtn.classList.toggle('ahover')
    allNaviItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('showNavi')
        })
    })
    
}
hamburgerBtn.addEventListener('click', handleNavi)

// // SHADOW NAVI
// function addShadow(){
//     if (window.scrollY >= 20){
//         nav.classList.add('shadow-bg')
//     }else{
//         nav.classList.remove('shadow-bg')
//     }
// }
// window.addEventListener('scroll',addShadow)
// hamburgerBtn.addEventListener('click', handleNav);

})