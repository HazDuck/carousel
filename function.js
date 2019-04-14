let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let image4 = document.getElementById('image4')
let mainImage = document.getElementById('main')
let right = document.getElementById('right')
let left = document.getElementById('left')


image1.addEventListener('click', (event) => changeMainImage(event.target.src))
image2.addEventListener('click', (event) => changeMainImage(event.target.src))
image3.addEventListener('click', (event) => changeMainImage(event.target.src))
image4.addEventListener('click', (event) => changeMainImage(event.target.src))
right.addEventListener('click', () => nextImageRight())
left.addEventListener('click', () => nextImageLeft())

function changeMainImage (newUrl) {
    mainImage.src = newUrl
}

function nextImageRight () {
    if (mainImage.src === image1.src) {
        mainImage.src = image2.src
    } else if (mainImage.src === image2.src) {
        mainImage.src = image3.src
    } else if (mainImage.src === image3.src) {
        mainImage.src = image4.src
    } else if (mainImage.src === image4.src) {
        mainImage.src = image1.src
    }
}

function nextImageLeft () {
    if (mainImage.src === image1.src) {
        mainImage.src = image4.src
    } else if (mainImage.src === image2.src) {
        mainImage.src = image1.src
    } else if (mainImage.src === image3.src) {
        mainImage.src = image2.src
    } else if (mainImage.src === image4.src) {
        mainImage.src = image3.src
    }
}