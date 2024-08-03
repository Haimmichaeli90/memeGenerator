'use strict'

function renderMeme() {
    const gallery = document.querySelector('.image-gallery')
    if (!gallery) {
        alert('Gallery not found')
        return
    }

    const meme = getMeme()
    const selectedImg = gImgs.find(img => img.id === meme.selectedImgId)
    
    if (!selectedImg) {
        alert('Selected image not found')
        return
    }

    const imgHtml = `
        <div style="position: relative; display: inline-block;">
            <img src="${selectedImg.url}" style="display: block;">
            <div style="
                position: absolute; 
                left: 50%; 
                top: 50%; 
                transform: translate(-50%, -50%); 
                font-size: ${meme.lines[meme.selectedLineIdx].size}px; 
                color: ${meme.lines[meme.selectedLineIdx].color}; 
                text-align: center;
            ">
                ${meme.lines[meme.selectedLineIdx].txt}
            </div>
        </div>
    `

    gallery.innerHTML = imgHtml
}

function handleTextInput() {
    const textInput = document.querySelector('.meme-text')
    if (textInput) {
        const newText = textInput.value
        setLineTxt(newText)
        renderMeme()
    }
}

function handleColorChange() {
    const colorInput = document.querySelector('.text-color')
    if (colorInput) {
        const newColor = colorInput.value
        setLineColor(newColor)
        renderMeme()
    }
}

function downloadMeme() {
    const elGalleryContainer = document.querySelector('.image-gallery')

    html2canvas(elGalleryContainer).then(function(canvas) {
        const link = document.createElement('a')
        link.download = 'meme.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
    })
}