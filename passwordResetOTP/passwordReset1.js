function changeFocus(current,next){
    if (document.getElementById(current).value.length){
        document.getElementById(current).classList.add("toggle")
        document.getElementById(next).focus()
    }
}