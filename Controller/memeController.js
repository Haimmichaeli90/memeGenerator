'use strict'

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

function changeFontSize(action) {
    const meme = getMeme()
    const currentLine = meme.lines[meme.selectedLineIdx]

    if (action === 'increase') {
        currentLine.size += 2
    } else if (action === 'decrease') {
        currentLine.size = Math.max(8, currentLine.size - 2)
    }
    setMeme(meme)
    renderMeme()
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


function renderMeme() {
    const gallery = document.querySelector('.image-gallery')

    const meme = getMeme()
    const selectedImg = gImgs.find(img => img.id === meme.selectedImgId)
    

    const linesHtml = meme.lines.map((line, index) => `
        <div style="
            position: absolute; 
            left: ${line.x || 50}%; 
            top: ${line.y || 50}%; 
            transform: translate(-50%, -50%); 
            font-size: ${line.size}px; 
            color: ${line.color}; 
            text-align: ${line.align || 'center'};
            white-space: nowrap;
            border: ${meme.selectedLineIdx === index ? '2px solid white' : 'none'}
            padding: 2px; 
        ">
            ${line.txt}
        </div>
    `).join('')

    const imgHtml = `
        <div style="position: relative; display: inline-block;">
            <img src="${selectedImg.url}" style="display: block;">
            ${linesHtml}
        </div>
    `
    gallery.innerHTML = imgHtml
}

function addLine() {
    const meme = getMeme()
    const newLine = {
      txt: 'Add Here New Text',    // Default text for the new line
      size: 20,                   // Default size
      color: 'blue',             // Default color
      x: 30,                    // Default horizontal position (center)
      y: 30                    // Default vertical position (center)
    }
  
    meme.lines.push(newLine)
    meme.selectedLineIdx = meme.lines.length - 1
    renderMeme()
  }

  function changeTextAlign(alignment) {

    const meme = getMeme()
    if (!['left', 'center', 'right'].includes(alignment)) {
        console.error('Invalid alignment value')
        return
    }
    const stepSize = 5

    if (alignment === 'left') {
        meme.lines[meme.selectedLineIdx].x = (meme.lines[meme.selectedLineIdx].x || 50) - stepSize
    } else if (alignment === 'right') {
        meme.lines[meme.selectedLineIdx].x = (meme.lines[meme.selectedLineIdx].x || 50) + stepSize
    } else if (alignment === 'center') {
        meme.lines[meme.selectedLineIdx].x = 50
    }

    meme.lines[meme.selectedLineIdx].x = Math.max(0, Math.min(100, meme.lines[meme.selectedLineIdx].x))

    setMeme(meme)
    renderMeme()
}