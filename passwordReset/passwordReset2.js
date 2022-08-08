let password = document.getElementById("newpassword")
let repeatPassword = document.getElementById("repeatpassword")

let passowrdValidation = document.getElementById("passwordValidation")
let passowrdValidationTemplate = document.getElementById("passwordValidationTemplate")

let passwordRepeatValidation = document.getElementById("passwordRepeatValidation")
let passwordRepeatValidationTemplate = document.getElementById("passowrdRepeatValidationTemplate")

checkPassword = (passowrd) => {
    passowrdValidation.innerHTML = ''
    password.parentElement.classList.remove('correct')
    let passowrdValidationClone = passowrdValidationTemplate.content.cloneNode(true)
    
    alltrue=true
    
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    if (passowrd.match(lowerCaseLetters) && passowrd.match(upperCaseLetters)) {
        passowrdValidationClone.getElementById("lowerAndUpperCase").classList.add('fulfiled')
        alltrue=alltrue&&true
    }else{
        alltrue=alltrue&&false
    }
    // Validate numbers
    var numbers = /[0-9]/g;
    if (passowrd.match(numbers)) {
        alltrue=alltrue&&true
        passowrdValidationClone.getElementById("numberAndSymbol").classList.add('fulfiled')
    }else{
        alltrue=alltrue&&false
    }
    
    // Validate length
    if (passowrd.length >= 8) {
        alltrue=alltrue&&true
        passowrdValidationClone.getElementById("charLength").classList.add('fulfiled')
    }else{
        alltrue=alltrue&&false
    }
    passowrdValidation.appendChild(passowrdValidationClone)
    if(alltrue){
        passowrdValidation.innerHTML=''
        password.parentElement.classList.add('correct')
    }
}
password.addEventListener('keyup', e => {
    checkPassword(password.value)
})

repeatPassword.addEventListener('keyup',e=>{
    passwordRepeatValidation.innerHTML=''
    console.log("working")
    if (password.value==repeatPassword.value){
        repeatPassword.parentElement.classList.add("correct")
    }else{
        repeatPassword.parentElement.classList.remove("correct")
        let passowrdValidationClone = passwordRepeatValidationTemplate.content.cloneNode(true)
        passwordRepeatValidation.appendChild(passowrdValidationClone)
    }
})