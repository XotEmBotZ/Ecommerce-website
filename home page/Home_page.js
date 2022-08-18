let searchName = document.getElementById("searchName")
let searchSearch = document.getElementById("searchSearch")
searchName.addEventListener("click",e=>{
    searchName.classList.add('dNone')
    searchSearch.classList.remove('dNone')
})

let filterList = document.getElementById('filterList');
filterList.addEventListener('click',e=>{
    for (items of filterList.getElementsByTagName('li')){
        console.log(items)
        items.setAttribute('data-isActive','false')
    }
    e.target.parentElement.setAttribute('data-isActive','true')
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