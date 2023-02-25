
//! NUMBER BUTTONS -------------------------------------------
const zeroBtn = document.getElementById("0-btn")
const oneBtn = document.getElementById("1-btn")
const twoBtn = document.getElementById("2-btn")
const threeBtn = document.getElementById("3-btn")
const foorBtn = document.getElementById("4-btn")
const fiveBtn = document.getElementById("5-btn")
const sixBtn = document.getElementById("6-btn")
const sevenBtn = document.getElementById("7-btn")
const eightBtn = document.getElementById("8-btn")
const nineBtn = document.getElementById("9-btn")

//! OPERATION BUTTONS ---------------------------------------

const additionBtn = document.getElementById("addition-btn")
const multiplicationBtn = document.getElementById("multipli-btn")
const divisionBtn = document.getElementById("division-btn")
const minceBtn = document.getElementById("mince-btn")


//! EXTRA BUTTONS ----------------------------------------------

const pointBtn = document.getElementById("point-btn")
const resetBtn = document.getElementById("reset-btn")
const equalBtn = document.getElementById("equal-btn")
const delBtn = document.getElementById("delBtn")

//! -------------------------------------------------------
const screenCalculator = document.getElementById("display")
const numberButtons = [
    zeroBtn,
    oneBtn,
    twoBtn,
    threeBtn,
    foorBtn,
    fiveBtn,
    sixBtn,
    sevenBtn,
    eightBtn,
    nineBtn
]

let tempNumber = "";
let numOne = 0
let numTwo = 0
let operation = "";
let isResultCalculated = false;
numberButtons.forEach(function (btnElemnt, index) {
    btnElemnt.addEventListener("click", function () {
        if(isResultCalculated === true){
            reset();
            isResultCalculated = false
        }
        if (tempNumber.length <= 10) {
            tempNumber = tempNumber + index
            screenCalculator.innerText = tempNumber
        }

    })
})

additionBtn.addEventListener("click", function () {
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "+"
})

minceBtn.addEventListener("click", function () {
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "-"
})

multiplicationBtn.addEventListener("click", function () {
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "*"
})

divisionBtn.addEventListener("click", function () {
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "/"
})

pointBtn.addEventListener("click", function(){
    tempNumber = tempNumber + "."
    screenCalculator.innerText = tempNumber


})
function reset() {
    tempNumber = ""
    numOne = 0;
    numTwo = 0;
    screenCalculator.innerText = "0"
}
resetBtn.addEventListener("click", reset)

delBtn.addEventListener("click", function () {
    const delitAction = tempNumber.split("")
    delitAction.pop()
    tempNumber = delitAction.join("")
    if(tempNumber.length < 1){
        tempNumber = "0"
    }
    screenCalculator.innerText = tempNumber
})



equalBtn.addEventListener("click", function () {
    numTwo = parseFloat(tempNumber)
    switch (operation) {
        case "+":
            result = numOne + numTwo;
            break;
        case "-":
            result = numOne - numTwo;
            break;
        case "*":
            result = numOne * numTwo;
            break
        
        default:
            result = numOne / numTwo;
    }
    tempNumber = result + ""
    isResultCalculated = true;
    screenCalculator.innerText = result
})



