'use strict'

function getImgs() {
    return  gImgs =[
        { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
        { id: 2, url: 'img/2.jpg', keywords: ['funny', 'Lady'] },
        { id: 3, url: 'img/3.jpg', keywords: ['funny', 'Lady'] },
        { id: 4, url: 'img/4.jpg', keywords: ['funny', 'Lady'] },
        { id: 5, url: 'img/5.jpg', keywords: ['funny', 'Lady'] },
        { id: 6, url: 'img/6.jpg', keywords: ['funny', 'Lady'] },
        { id: 7, url: 'img/7.jpg', keywords: ['funny', 'Lady'] },
        { id: 8, url: 'img/8.jpg', keywords: ['funny', 'sad'] },
        { id: 9, url: 'img/9.jpg', keywords: ['funny', 'sad'] },
        { id: 10, url: 'img/10.jpg', keywords: ['funny', 'sad'] },
        { id: 11, url: 'img/11.jpg', keywords: ['funny', 'sad'] },
        { id: 12, url: 'img/12.jpg', keywords: ['funny', 'sad'] },
    ]
}

function renderGallery() {
    const imgs = getImgs();
    const elGalleryContainer = document.querySelector('.gallery');
    const filterInput = document.querySelector('#gallery-filter');
    const datalist = document.querySelector('#gallery-keywords');

    // Populate datalist using an object to collect unique keywords
    const keywordsObj = {}; // Object to store unique keywords
    imgs.forEach(img => {
        img.keywords.forEach(keyword => {
            keywordsObj[keyword] = true; // The key represents the unique keyword
        });
    });

    // Convert object keys to an array and populate the datalist
    const keywordsArray = Object.keys(keywordsObj);
    datalist.innerHTML = keywordsArray.map(keyword => `<option value="${keyword}">`).join('');

    // Filter images
    const filterText = filterInput.value.toLowerCase();
    const filteredImgs = imgs.filter(img => img.keywords.some(keyword => keyword.toLowerCase().includes(filterText)));

    const strHtmls = filteredImgs.map(img => `
        <section class="gallery-item">
            <img src="${img.url}" data-id="${img.id}" alt="Meme Image" onclick="onImgSelect(${img.id})">
        </section>
    `).join('');
    elGalleryContainer.innerHTML = strHtmls;
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

function switchToSaved() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.new-gallery').style.display = 'none'
    document.querySelector('.saved-page').style.display = 'block'
}

 

function switchToEditor() {
    document.querySelector('.meme-editor').style.display = 'block'
    document.querySelector('.saved-page').style.display = 'none'
    document.querySelector('.image-gallery').style.display = 'block'
    document.querySelector('.new-gallery').style.display = 'none'
}

function switchToGallery() {
    document.querySelector('.saved-page').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.image-gallery').style.display = 'none'
    document.querySelector('.new-gallery').style.display = 'block'

}

