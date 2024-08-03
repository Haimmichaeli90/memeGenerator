'use strict'

function getImgs() {

    return gImgs
}

function renderGallery() {
    const imgs = getImgs()
    const elGalleryContainer = document.querySelector('.image-gallery')
    
    const strHtmls = imgs.map(img => `
        <img src="${img.url}" data-id="${img.id}" alt="Meme Image">
    `).join('')

    elGalleryContainer.innerHTML = strHtmls

    if (imgs.length > 0) {
        onImgSelect(imgs[0].id)
    }
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}

