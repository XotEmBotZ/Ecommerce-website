console.log("Hi");
let ele = document.getElementsByClassName("bookQuantityBtn");

dataIncrease=(increaseElement,input)=>{
    increaseElement.addEventListener('click',e=>{
        console.log(input)
        input.value=parseInt(input.value)+1
    })
}

dataDecrease=(decreaseElement,input)=>{
    decreaseElement.addEventListener('click',e=>{
        console.log(input)
        input.value=parseInt(input.value)-1
    })
}


for (ele of ele){
    let btns=ele.getElementsByTagName('button')
    let inp=ele.getElementsByTagName('input')[0]
    dataIncrease(btns[1],inp)
    dataDecrease(btns[0],inp)
    console.log(btns)
    console.log(inp)
}
