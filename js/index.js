var myImages = Array.from(document.querySelectorAll('.item img'));
var lightBox = document.querySelector('.lightBox-container')
var next = document.getElementById('right');
var prev = document.getElementById('left');
var close = document.getElementById('close');
var currentImg = 0;


for (i=0 ; i<myImages.length; i++){
    myImages[i].addEventListener('click',(e)=>{
        lightBox.style.display = 'flex';
        var myImg = e.target.src;
        currentImg = myImages.indexOf(e.target);

        lightBox.firstElementChild.style.backgroundImage = `url(${myImg})`

    })
}


next.addEventListener('click',(e)=>{
    currentImg++;

    if(currentImg==myImages.length ){
    currentImg = 0

    }

    lightBox.firstElementChild.style.backgroundImage = `url(${myImages[currentImg].src})`;


})
prev.addEventListener('click',(e)=>{
    currentImg--;

    if(currentImg==-1){
    currentImg = myImages.length-1
    }
    lightBox.firstElementChild.style.backgroundImage = `url(${myImages[currentImg].src})`;
})

close.addEventListener('click',(e)=>{
    lightBox.style.display = 'none';
})

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' ){
        lightBox.style.display = 'none';

    }
    else if (e.key ==='ArrowRight'){
        currentImg++;

        if(currentImg==myImages.length ){
        currentImg = 0
    
        }
    
        lightBox.firstElementChild.style.backgroundImage = `url(${myImages[currentImg].src})`;
    
    }
    else if (e.key === 'ArrowLeft'){
        currentImg--;

        if(currentImg==-1){
        currentImg = myImages.length-1
        }
        lightBox.firstElementChild.style.backgroundImage = `url(${myImages[currentImg].src})`;
    
    }
})