var imageContainerEle = document.querySelector('.image-container');
var buttonEle = document.getElementById('btn-load-more');
buttonEle.addEventListener('click', ()=>{
    addImages();
})

function addImages()
{
    for (let index = 0; index < 10; index++) {
        
        var newImgEle = document.createElement('img');
        newImgEle.classList.add('random-img');
        newImgEle.src = `https://picsum.photos/300?${Math.floor(Math.random()*1000)}`
        imageContainerEle.appendChild(newImgEle);
    }
}