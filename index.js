let fcolor = document.getElementById('firstColor')
let scolor = document.getElementById('secondColor')
let tcolor = document.getElementById('thirdColor')
let focolor = document.getElementById('fourColor')
let ficolor = document.getElementById('fiveColor')
let tShow = document.getElementById('showTime')
let showBtn = document.getElementById('timeBtn')
let heartBtn = document.getElementById('hrBtn')
let heartShow = document.getElementById('hr-part')
let timeShow = document.getElementById('time-part')
let aodBtn = document.getElementById('aod-btn')
let aodShow = document.getElementById('aod-part')

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

showBtn.addEventListener("click", function () {
    heartShow.style.display = 'none';
    aodShow.style.display = 'none';
    timeShow.style.display = 'block';
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
        tShow.textContent = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
});

heartBtn.addEventListener("click", function(){
    timeShow.style.display = 'none';
    aodShow.style.display = 'none';
    heartShow.style.display = 'block';
})

aodBtn.addEventListener("click", function() {
    heartShow.style.display = 'none';
    timeShow.style.display = 'none';
    aodShow.style.display = 'block';
})