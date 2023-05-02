let show = document.getElementById("main1-text")
let btnClose = document.getElementById("btnClose")
let btnOpen = document.getElementById("btnOpen")

function visible1(){
    show.classList.remove("visible")
    btnClose.classList.remove("visible")
    btnOpen.classList.add("visible")
}
function visible2(){
    show.classList.add("visible")
    btnClose.classList.add("visible")
    btnOpen.classList.remove("visible")
}