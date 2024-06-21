let firstNumber = "";
let secondNumber = "";
let operator = "";



const container = document.querySelector("#container")
const screen = document.querySelector("#screen")

container.addEventListener("click", (event) => {
 let data = event.target.textContent;
    if (event.target.classList.contains("button")) {
       
        screen.textContent = data
    }
    if (operator === "") {
        firstNumber += data
        console.log(`firstNumber = ${firstNumber}`)
    }
    if (data === ("-" || "+" || "/" || "*")) {
        operator = data;
         console.log(`operator = ${operator}`)
    }
    if ((operator != "") && (firstNumber != "")){
        secondNumber += data;
         console.log(`secondNumber = ${secondNumber}`)
    }
    if (event.target.classList.contains("calculate")) {
        calculate(operator,firstNumber,secondNumber)
    }
})
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a-b
}
function calculate(operator, firstNumber, secondNumber) {
    let a = parseInt(firstNumber);
    let b= parseInt(secondNumber)
    if (operator === "-") {
         screen.textContent= subtract(a,b)
    }
}