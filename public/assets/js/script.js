var sliderElement = document.querySelector('.slider')
var sliderPointers = Array.from(document.querySelectorAll('.slider-pointers .pointer'))

console.log(sliderPointers)

if (sliderPointers) {
    sliderPointers.forEach( (pointer) => {
        pointer.addEventListener('click', () => {
            sliderPointers.forEach( (pointer) => {
                pointer.classList.remove('active')
            })
            pointer.classList.add('active')

            sliderElement.style.marginLeft = (-100 * (parseInt(sliderPointers.indexOf(pointer)))) + 'vw'
        })
    })
}