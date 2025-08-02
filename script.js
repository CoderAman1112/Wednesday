
const nextBtn = document.querySelector(".btn-1")
const gallery = document.querySelector(".images")
let currentImg = 2
nextBtn.addEventListener("click", ()=> {
    currentImg += 1
    gallery.src = `./source/img-${currentImg}.jpg`
    
    if(currentImg>4){
        currentImg = 1
    }

})
