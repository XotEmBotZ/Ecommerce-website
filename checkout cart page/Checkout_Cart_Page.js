
let ele = document.getElementsByClassName("bookQuantityBtn");

dataIncrease = (increaseElement, input) => {
    increaseElement.addEventListener('click', e => {
        input.value = parseInt(input.value) + 1
    })
}

dataDecrease = (decreaseElement, input) => {
    decreaseElement.addEventListener('click', e => {
        input.value = parseInt(input.value) - 1
    })
}


for (ele of ele) {
    let btns = ele.getElementsByTagName('button')
    let inp = ele.getElementsByTagName('input')[0]
    dataIncrease(btns[1], inp)
    dataDecrease(btns[0], inp)
}


let bookInpDivs = document.getElementsByClassName("bookSelect")
for (ele of bookInpDivs) {
    ele.addEventListener('change', e => {
        if (e.target.checked) {
            let parentElement=e.target.parentElement.parentElement
            parentElement.classList.remove("bgRed")
        }else{
            let parentElement=e.target.parentElement.parentElement
            parentElement.classList.add("bgRed")
        }
    })
}