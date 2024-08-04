'use strict'

function getImgs() {

    return gImgs
}

function renderGallery() {
    const imgs = getImgs()
    const elGalleryContainer = document.querySelector('.image-gallery')

    const strHtmls = imgs.map(img => `
        <div class="gallery-item">
            <img src="${img.url}" data-id="${img.id}" alt="Meme Image" onclick="onImgSelect(${img.id})">
        </div>
    `).join('')
    
    elGalleryContainer.innerHTML = strHtmls
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
    switchToEditor()
}

function onOpenGallery() {
    renderGallery()
    switchToGallery()
}

function switchToGallery() {
    document.querySelector('.saved-page').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.image-gallery').style.display = 'block'
}





