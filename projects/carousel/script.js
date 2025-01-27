const slidesContainer = document.querySelector('.slides')
const slideNavigation = document.querySelector('.control')
let slides = slidesContainer.children
let slideID = 0
let slideWidth


function throttle(cb, delay = 1000) {
    let shouldWait = false
    return (...args) => {
        if (shouldWait) return
        cb(...args)
        shouldWait = true
        setTimeout(() => { shouldWait = false }, delay)
    }
}

function controlSlides(action) {
    slideWidth = slides[0].getBoundingClientRect().width
    switch (action) {
        case 'right':
            slideID++
            if (slideID === slides.length) slideID = 0
            slidesContainer.style.transform = `translateX(-${slideID * 100}%)`
            break
        case 'left':
            slideID--
            if (slideID === -1) slideID = slides.length - 1
            slidesContainer.style.transform = `translateX(-${slideID * 100}%)`
            break
    }
}

const controlSlidesTrottled = throttle((action) => controlSlides(action), 1000)

function autoPlay(interval) {
    return setInterval(() => controlSlides('right'), interval)
}

let interval = 3000
let id = autoPlay(interval)

slideNavigation.addEventListener('mouseenter', (e) => clearInterval(id))
slideNavigation.addEventListener('mouseleave', (e) => id = autoPlay(interval))