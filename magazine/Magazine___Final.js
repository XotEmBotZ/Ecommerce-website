let radio1  = document.getElementById("billedMonthly")
let radio2  = document.getElementById("billedYearly")

radio1.addEventListener('change',e=>{
	console.log(e)
	radio2.parentElement.classList.remove("checked")
	radio1.parentElement.classList.add("checked")
})
radio2.addEventListener('change',e=>{
	console.log(e)
	radio2.parentElement.classList.add("checked")
	radio1.parentElement.classList.remove("checked")
})