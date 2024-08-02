'use strict'

function renderMeme() {
    const canvas = document.querySelector('.meme-canvas')
    if (!canvas) {
        alert('Canvas not found')
        return
    }
    const ctx = canvas.getContext('2d')
    
    const meme = getMeme()
    
    const selectedImg = gImgs.find(img => img.id === meme.selectedImgId)

    if (!selectedImg) {
        alert('Selected image not found')
        return
    }

    const img = new Image()
    img.src = selectedImg.url

    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        const line = meme.lines[meme.selectedLineIdx]
        ctx.font = `${line.size}px Arial`
        ctx.fillStyle = line.color
        ctx.textAlign = 'center'
        ctx.fillText(line.txt, canvas.width / 2, canvas.height / 2)
    };

}
