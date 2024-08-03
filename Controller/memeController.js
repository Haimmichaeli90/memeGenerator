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
  
    const linesHtml = meme.lines.map((line, index) => `
      <div style="
        position: absolute; 
        left: ${line.x || 50}%; 
        top: ${line.y || 50}%; 
        transform: translate(-50%, -50%); 
        font-size: ${line.size}px; 
        color: ${line.color}; 
        text-align: center;
        white-space: nowrap;
      ">
        ${line.txt}
      </div>
    `).join('')
  
    const imgHtml = `
      <div style="position: relative; display: inline-block;">
        <img src="${selectedImg.url}" style="display: block;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
          ${linesHtml}
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

function changeFontSize(action) {
    const meme = getMeme()
    const currentLine = meme.lines[meme.selectedLineIdx]

    if (action === 'increase') {
        currentLine.size += 2
    } else if (action === 'decrease') {
        currentLine.size = Math.max(8, currentLine.size - 2)
    }

    renderMeme()
}


function addLine() {
    const meme = getMeme()
    const newLine = {
      txt: 'Add Here New Text',   // Default text for the new line
      size: 20,          // Default size
      color: 'blue',  // Default color
      x: 30,             // Default horizontal position (center)
      y: 30              // Default vertical position (center)
    }
  
    meme.lines.push(newLine)
    meme.selectedLineIdx = meme.lines.length - 1
    renderMeme()
  }