var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});

const loginsec = document.querySelector('.login-section')
const registerlink = document.querySelector('.register-link')
const loginlink = document.querySelector('.login-link')

loginlink.addEventListener('click', () => {
    loginsec.classList.add('active')
})
registerlink.addEventListener('click', () => {
    loginsec.classList.remove('active')
})
