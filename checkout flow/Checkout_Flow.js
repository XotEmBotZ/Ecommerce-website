let shippingToggleElement=document.getElementById("shipingToggle")
let paymentToggleElement=document.getElementById("paymentToggle")

shippingToggleElement.addEventListener("click",(e)=>{

    let isToggle=e.target.getAttribute('data-toggleable');
    if (isToggle=="true"){
        console.log("Done")
        document.getElementById("shippingForm").classList.toggle("dNone")
        document.getElementById("paymentForm").classList.add("dNone")
        document.getElementsByClassName("navI")[0].classList.add("navIdone")
        document.getElementsByClassName("navI")[0].innerText="check_circle"
    }
})


paymentToggleElement.addEventListener("click",(e)=>{
    let isToggle=e.target.getAttribute('data-toggleable');
    if (isToggle=="true"){
        console.log("Done")
        document.getElementById("paymentForm").classList.toggle("dNone")
        document.getElementById("shippingForm").classList.add("dNone")
        document.getElementsByClassName("navI")[1].classList.add("navIdone")
        document.getElementsByClassName("navI")[1].innerText="check_circle"
    }
})