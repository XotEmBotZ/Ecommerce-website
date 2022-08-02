let mainImg = document.getElementById("productMainImg")
// console.log(mainImg.src)
function changeImg(elementId){
	let src=document.getElementById(elementId).src;
	mainImg.src=src;
}

let sideImgs = document.getElementsByClassName("productSideImg")
for (element of sideImgs){
	console.log(element)
	element.addEventListener('click',e=>changeImg(e.target.id))
}