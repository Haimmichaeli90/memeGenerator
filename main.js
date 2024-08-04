'use strict'


var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'Lady'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'sad'] }
]

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function switchToGallery() {
    document.querySelector('.saved-page').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
}

function switchToSaved() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.saved-page').style.display = 'block'
}

function onSaveMeme() {
    const meme = getMeme()
    const dataUrl = getMemeImage()
    meme.dataUrl = dataUrl
    saveMemeToStorage(meme)
    document.querySelector('.message-modal').style.display = 'block'
    setTimeout(() => document.querySelector('.message-modal').style.display = 'none', 2000)
}