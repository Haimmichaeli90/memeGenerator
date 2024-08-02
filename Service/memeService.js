'use strict'


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}


function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(txt){
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].txt = txt
}

function setLineColor(color) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color
}
