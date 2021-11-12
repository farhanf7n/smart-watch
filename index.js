let fcolor = document.getElementById('firstColor')
let scolor = document.getElementById('secondColor')
let tcolor = document.getElementById('thirdColor')
let focolor = document.getElementById('fourColor')
let ficolor = document.getElementById('fiveColor')

let chImg = document.getElementById('chng-img')

fcolor.addEventListener("click", function(){
    chImg.src = './images/purple-watch.png'
})

scolor.addEventListener("click", function(){
    chImg.src = './images/pink-watch.png'
})

tcolor.addEventListener("click", function(){
    chImg.src = './images/black-watch.png'
})

focolor.addEventListener("click", function(){
    chImg.src = './images/orange-watch.png'
})

ficolor.addEventListener("click", function(){
    chImg.src = './images/skin-watch.png'
})