const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')


let sum

plusBtn.onclick = function (){
    sum = Number(input1.value) + Number(input2.value)
}

minusBtn.onclick = function (){
    sum = Number(input1.value) - Number(input2.value)
}

function printResult(sum){
    resultElement.textContent = sum
    if (sum > 0){
        resultElement.style.color = 'green'

    }
    else{
        resultElement.style.color = 'red'
    }
}


submitBtn.onclick = function (){
    printResult(sum)
}

