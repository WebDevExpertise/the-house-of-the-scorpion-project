const content = document.querySelector('main')
const slideOne = document.querySelector('.slide-one')
const slideTwo = document.querySelector('.slide-two')
const slideThree = document.querySelector('.slide-three')
const slideFour = document.querySelector('.slide-four')
const slideFive = document.querySelector('.slide-five')
const scrollToTop = document.querySelector('.scroll-top')

content.addEventListener('scroll', () => {
    const isAtBottomOfScreen = content.scrollTop + content.clientHeight === content.scrollHeight
    if (isAtBottomOfScreen) setTimeout(() => {
        if (isAtBottomOfScreen) {
            content.style.scrollSnapType = 'none'
            content.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            setTimeout(() => content.style.scrollSnapType = 'y mandatory', 700)
        }
    }, 10000)
    if (content.scrollTop + content.clientHeight >= content.scrollHeight * 0.6) scrollToTop.style.display = 'initial'
    else scrollToTop.style.display = 'none'
})

scrollToTop.addEventListener('click', () => {
    content.style.scrollSnapType = 'none'
    content.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    if (content.clientWidth > 1024) setTimeout(() => content.style.scrollSnapType = 'y mandatory', 700)
})