
const nextBtn = document.querySelector(".btn-1")
const gallery = document.querySelector(".images")
let currentImg = 2
nextBtn.addEventListener("click", ()=> {
    images = ['/source/img-2.jpg', '/source/img-3.jpg', '/source/img-4.jpg', '/source/img-5.jpg']
    currentImg += 1
    gallery.src = `/source/img-${currentImg}.jpg`
    
    if(currentImg>4){
        currentImg = 1
    }
})