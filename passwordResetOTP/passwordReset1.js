function changeFocus(prev,current,next,e){
    if (e.key==='Backspace'||e.key==='Delete'){
        document.getElementById(prev).focus()
    }
    if (document.getElementById(current).value.length ){
        document.getElementById(current).classList.add("toggle")
        document.getElementById(next).focus()
    }
}

document.getElementById('otp1').addEventListener('keyup',(e)=>{changeFocus('otp1','otp1','otp2',e)})
document.getElementById('otp2').addEventListener('keyup',(e)=>{changeFocus('otp1','otp2','otp3',e)})
document.getElementById('otp3').addEventListener('keyup',(e)=>{changeFocus('otp2','otp3','otp4',e)})
document.getElementById('otp4').addEventListener('keyup',(e)=>{changeFocus('otp3','otp4','otp5',e)})
document.getElementById('otp5').addEventListener('keyup',(e)=>{changeFocus('otp4','otp5','otp6',e)})
document.getElementById('otp6').addEventListener('keyup',(e)=>{changeFocus('otp5','otp6','otp6',e)})