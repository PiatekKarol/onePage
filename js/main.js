document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navi__items');
  const hamburgerBtn = document.querySelector(".hamburger");
  const allNaviItems = document.querySelectorAll('.navi__item');
  const navShadow = document.querySelector('.header-wrapper');
  const footerYear = document.querySelector('.footer-box__year');

  // // SHOW MENU
  const handleNavi = () => {
    nav.classList.toggle('showNavi')

    allNaviItems.forEach(item => {
      item.addEventListener('click', () => {
        nav.classList.remove('showNavi')
      })
    })

  }
  hamburgerBtn.addEventListener('click', handleNavi);

  // // SHADOW NAVI
  function addShadowNavi() {
    if (window.scrollY >= 20) {
      navShadow.classList.add('shadow-bg')
    } else {
      navShadow.classList.remove('shadow-bg')
    }
  }
  window.addEventListener('scroll', addShadowNavi);

  // // CURRENT YEAR
  const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
  }
  handleCurrentYear();

  // SLIDER
  const thumbnailImg = document.querySelectorAll('.demo');
  const slideImg = document.querySelector('.container-slider__slide');
  const prev = document.querySelector('.container-slider__prev');
  const next = document.querySelector('.container-slider__next');
  let currentItem = 0
  const caption = document.querySelector('.container-slider__caption')

  thumbnailImg.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentItem = index
      addOpacity()
      altToBox()
      showSlide()
    })
  })

  function showSlide() {
    slideImg.src = thumbnailImg[currentItem].src
  }

  function addOpacity() {
    for (let i = 0; i < thumbnailImg.length; i++) {
      thumbnailImg[i].classList.remove('active');
      thumbnailImg[currentItem].classList.add('active');
    }
  }

  function altToBox() {
    const altBox = thumbnailImg[currentItem].getAttribute("alt");
    console.log(altBox);
    caption.innerText = altBox;
  }

  next.addEventListener('click', () => {
    currentItem++
    prev.style.pointerEvents = "auto";
    prev.style.backgroundColor = "rgba(28, 67, 104, 0.8)";

    if (currentItem >= thumbnailImg.length - 1) {
      next.style.pointerEvents = "none";
      next.style.backgroundColor = "rgba(28, 67, 104, 0.3)";
    }
    showSlide()
    addOpacity()
    altToBox()

  })

  prev.addEventListener('click', () => {
    currentItem--
    next.style.pointerEvents = "auto";
    next.style.backgroundColor = "rgba(28, 67, 104, 0.8)";

    if (currentItem <= 0) {
      prev.style.pointerEvents = "none";
      prev.style.backgroundColor = "rgba(28, 67, 104, 0.3)";
    }
    console.log(currentItem);
    showSlide()
    addOpacity()
    altToBox()
  })

  showSlide()
  addOpacity()
  altToBox()

})