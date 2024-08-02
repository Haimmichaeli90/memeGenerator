'use strict'

function getImgs() {

    return gImgs
}

function renderGallery() {
    const imgs = getImgs()

    const strHtmls = imgs.map(img => `
        <img src="${img.url}" onclick="onImgSelect(${img.id})" alt="Meme Image">
    `).join('')

    const elGalleryContainer = document.querySelector('.image-gallery')
    if (elGalleryContainer) {
        elGalleryContainer.innerHTML = strHtmls
    }
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}

