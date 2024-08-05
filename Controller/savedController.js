'use strict'

 

function onOpenSaved() {
    renderSavedMemes()
    switchToSaved()
}

 
function renderSavedMemes() {
    const savedMemes = getSavedMemes();
    const elSavedContainer = document.querySelector('.saved-container')

    const memesHtml = savedMemes.map((meme, idx) => {
        const lines = Array.isArray(meme.lines) ? meme.lines : []
        const linesHtml = lines.map((line) => `
            <div style="
                position: absolute;
                left: ${line.x || 50}%;
                top: ${line.y || 50}%;
                transform: translate(-50%, -50%);
                font-size: ${line.size}px;
                color: ${line.color};
                font-family: ${line.fontFamily || 'Arial'};
                text-align: ${line.align || 'center'};
                white-space: nowrap;
            ">
                ${line.txt}
            </div>
        `).join('')
        const img = gImgs.find(img => img.id === meme.selectedImgId)
        if (!img) {
            console.log(`Image with id ${meme.selectedImgId} not found.`)
            return ''
        }
        return `
            <div style="position: relative; display: inline-block; margin: 10px;">
                <img src="${img.url}" style="display: block;">
                ${linesHtml}
                <button onclick="editSavedMeme(${idx})">Edit</button>
            </div>
        `
    }).join('')
    elSavedContainer.innerHTML = memesHtml
}

 

function editSavedMeme(idx) {
    const savedMemes = getSavedMemes()
    const meme = savedMemes[idx]
    setMeme(meme)
    switchToEditor()
}


function editSavedMeme(idx) {
    const savedMemes = getSavedMemes()
    const meme = savedMemes[idx]
    setMeme(meme)
    switchToEditor()
}

 

function saveMemeToStorage() {
    getMemeImage().then(dataUrl => {
        const meme = getMeme()
        const savedMemes = loadFromStorage('savedMemes') || []
        savedMemes.push({
            dataUrl: dataUrl,
            meme: meme
        })
        saveToStorage('savedMemes', savedMemes)
    })
}

 

function getMemeImage() {
    const elCanvas = document.querySelector('.image-gallery')

    return new Promise((resolve) => {
        html2canvas(elCanvas).then(canvas => {
            resolve(canvas.toDataURL('image/png'))

        })

    })

}
 

function onSaveMeme() {
    saveMemeToStorage()
    document.querySelector('.message-modal').classList.remove('hidden')
    setTimeout(() => {
        document.querySelector('.message-modal').classList.add('hidden')
    }, 2000)

}