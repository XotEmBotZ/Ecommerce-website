let notification = document.getElementById("notification")
notification.addEventListener('click',e=>{
    notification.classList.add("dNone")
})


let hamburgerDiv = document.getElementById("hamburgerMobile")
let nav = document.getElementById("nav")
hamburgerDiv.addEventListener('click',e=>{
    if (nav.classList.contains('dNone')){
        nav.classList.remove("dNone")
        hamburgerDiv.classList.add("hamburgerOpened")
    }else{
        nav.classList.add("dNone")
        hamburgerDiv.classList.remove("hamburgerOpened")
    }
})

if (window.screen.width<=480){
    nav.classList.add('dNone');
}

let mobileButtonOpener=document.getElementById("filterActiveBtnMobile")
let mainFilter=document.getElementById("mainFilter")
mobileButtonOpener.addEventListener('click',e=>{
    if (mainFilter.getAttribute("data-active")=="true"){
        mainFilter.setAttribute("data-active","false")
        mobileButtonOpener.getElementsByTagName('i')[0].innerHTML="filter_list"
    }else{
        mobileButtonOpener.getElementsByTagName('i')[0].innerHTML="close";
        mainFilter.setAttribute("data-active","true")
    }
})