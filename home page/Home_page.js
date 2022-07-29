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