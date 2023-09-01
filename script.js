var sliderElementBanner = document.querySelector('#banner .slider')
var sliderPointersBanner = Array.from(document.querySelectorAll('#banner .slider-pointers .pointer'))

if (sliderPointersBanner) {
    sliderPointersBanner.forEach( (pointer) => {
        pointer.addEventListener('click', () => {
            sliderPointersBanner.forEach( (pointer) => {
                pointer.classList.remove('active')
            })
            pointer.classList.add('active')

            sliderElementBanner.style.marginLeft = (-100 * (parseInt(sliderPointersBanner.indexOf(pointer)))) + 'vw'
        })
    })
}

var sliderElementTeam = document.querySelector('#content-default .team .slider')
var sliderPointersTeam = Array.from(document.querySelectorAll('#content-default .slider-pointers .pointer'))

if (sliderPointersTeam) {
    sliderPointersTeam.forEach( (pointer) => {
        pointer.addEventListener('click', () => {
            sliderPointersTeam.forEach( (pointer) => {
                pointer.classList.remove('active')
            })
            pointer.classList.add('active')

            sliderElementTeam.style.transform = `translateX(${-840 * (parseInt(sliderPointersTeam.indexOf(pointer)))}px)`;

        })
    })
}