
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

const pointBtn = document.getElementById("reset-btn")
const resetBtn = document.getElementById("reset-btn")
const equalBtn = document.getElementById("equal-btn")

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
let operation
numberButtons.forEach(function(btnElemnt, index){
    btnElemnt.addEventListener("click", function() {
        if (tempNumber.length <= 10) {
            tempNumber = tempNumber + index
            screenCalculator.innerText = tempNumber
        }

    })
})

additionBtn.addEventListener("click", function(){
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "+"
})

minceBtn.addEventListener("click", function(){
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "-"
})

multiplicationBtn.addEventListener("click", function(){
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "*"
})

divisionBtn.addEventListener("click", function(){
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "/"
})

resetBtn.addEventListener("click", function(){
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "reset"
})


equalBtn.addEventListener("click", function() {
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
        case "reset":
            result = "0"
        default:
            result = numOne / numTwo;
    }
    screenCalculator.innerText = result
})



