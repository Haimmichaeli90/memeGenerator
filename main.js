'use strict'


var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    // { id: 2, url: 'img/2.jpg', keywords: ['funny', 'Lady'] }
]

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function onInit() {
    renderMeme()
    renderGallery()
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



