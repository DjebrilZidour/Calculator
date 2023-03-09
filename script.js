
//! NUMBER BUTTONS -------------------------------------------
let zeroBtn = document.getElementById("0-btn")
let oneBtn = document.getElementById("1-btn")
let twoBtn = document.getElementById("2-btn")
let threeBtn = document.getElementById("3-btn")
let foorBtn = document.getElementById("4-btn")
let fiveBtn = document.getElementById("5-btn")
let sixBtn = document.getElementById("6-btn")
let sevenBtn = document.getElementById("7-btn")
let eightBtn = document.getElementById("8-btn")
let nineBtn = document.getElementById("9-btn")

//! OPERATION BUTTONS ---------------------------------------

let additionBtn = document.getElementById("addition-btn")
let multiplicationBtn = document.getElementById("multipli-btn")
let divisionBtn = document.getElementById("division-btn")
let minceBtn = document.getElementById("mince-btn")


//! EXTRA BUTTONS ----------------------------------------------

let pointBtn = document.getElementById("point-btn")
let resetBtn = document.getElementById("reset-btn")
let equalBtn = document.getElementById("equal-btn")
let delBtn = document.getElementById("delBtn")
const containerOptionBtn = document.getElementById("containerOptionBtn")
const optionBtn = document.getElementById("optionBtn")
containerOptionBtn.style.justifyContent = "flex-start"
let isClicked = "left"
const normalDisp = document.getElementById("normalDisp")
const longDisp = document.getElementById("try")
longDisp.style.display = "none"
const onOffText = document.getElementById("on-off")
//! -------------------------------------------------------
const screenCalculator = document.getElementById("display")
let numberButtons = [
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
const animationContainer = document.getElementsByClassName("")

let tempNumber = "";
let numOne = 0
let numTwo = 0
let operation = "";
let isResultCalculated = false;
let isworking = false;
onOffText.innerText = "OFF"
screenCalculator.innerText = "SCREEN Off";

optionBtn.addEventListener("click", function () {

    if (isClicked === "left") {
        tempNumber = "";
        containerOptionBtn.style.justifyContent = "flex-end"
        screenCalculator.innerText = "0"
        isClicked = "right"
        isworking = true;
        console.log("is working: ", isworking);
        return isworking
    }else{
        isworking = false;
        containerOptionBtn.style.justifyContent = "flex-start"
        screenCalculator.innerText = "SCREEN Off"
        isClicked = "left"
        isResultCalculated = false;
        reset()
        isworking = false;
        console.log("is working: ", isworking);
        return isworking
     
    }

})



numberButtons.forEach(function (btnElemnt, index) {
    btnElemnt.addEventListener("click", function () {

        if(isworking === false){
            return;
        }

        if (isResultCalculated === true) {
            reset();
            isResultCalculated = false
        }

        if (tempNumber.length <= 10) {
            tempNumber = tempNumber + index

            screenCalculator.innerText = tempNumber

            console.log("i wrote the number")
        }
   })
})


additionBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "+"
})

minceBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "-"
})

multiplicationBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "*"
})

divisionBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }
    isResultCalculated = false
    numOne = parseFloat(tempNumber);
    tempNumber = ""
    screenCalculator.innerText = "0"
    operation = "/"
})
pointBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }
    tempNumber = tempNumber + "."
    screenCalculator.innerText = tempNumber
    })
    
function reset() {
    if(isworking === false){
        return;
    }
    tempNumber = ""
    numOne = 0;
    numTwo = 0;
    screenCalculator.innerText = "0"
}

resetBtn.addEventListener("click", reset)

delBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }
    const delitAction = tempNumber.split("")
    delitAction.pop()
    tempNumber = delitAction.join("")
    delitAction.join("")
    if (tempNumber.length < 1) {
        tempNumber = "0"
    }
    screenCalculator.innerText = tempNumber
})

equalBtn.addEventListener("click", function () {
    if(isworking === false){
        return;
    }

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

    if (result.length < 11){
        // screenCalculator.style.fontSize = "2rem"
        longDisp.style.display = "none"
        normalDisp.style.display = "flex"
    }else{
        // screenCalculator.style.fontSize = "1.7rem"
        normalDisp.style.display = "none"
        longDisp.style.display = "flex"
    }
    screenCalculator.innerText = result
})

















    










// function calculator(isWorking) {
 


// let isworking = false;

// screenCalculator.innerText = "SCREEN Off"





// checkON(isworking, calculator)



// function checkON(tttt, callBack) {
//     console.log("checking!!!!!")
//     if (tttt === true) {
//         console.log("it should work")
//         callBack()
//     }else{
//         return
//     } 

// }

// checkON(isworking, calculator)



// if (isworking === true) {
//     calculator(true)
// }else{
//     calculator(false)
// }
















// numberButtons.forEach(function (btnElemnt, index) {
//     btnElemnt.addEventListener("click", function () {
//         if(isResultCalculated === true){
//             reset();
//             isResultCalculated = false
//         }
//         if (tempNumber.length <= 10) {
//             tempNumber = tempNumber + index
//             screenCalculator.innerText = tempNumber
//         }

//     })
// })

// additionBtn.addEventListener("click", function () {
//     isResultCalculated = false
//     numOne = parseFloat(tempNumber);
//     tempNumber = ""
//     screenCalculator.innerText = "0"
//     operation = "+"
// })

// minceBtn.addEventListener("click", function () {
//     isResultCalculated = false
//     numOne = parseFloat(tempNumber);
//     tempNumber = ""
//     screenCalculator.innerText = "0"
//     operation = "-"
// })

// multiplicationBtn.addEventListener("click", function () {
//     isResultCalculated = false
//     numOne = parseFloat(tempNumber);
//     tempNumber = ""
//     screenCalculator.innerText = "0"
//     operation = "*"
// })

// divisionBtn.addEventListener("click", function () {
//     isResultCalculated = false
//     numOne = parseFloat(tempNumber);
//     tempNumber = ""
//     screenCalculator.innerText = "0"
//     operation = "/"
// })

// pointBtn.addEventListener("click", function(){
//     tempNumber = tempNumber + "."
//     screenCalculator.innerText = tempNumber


// })
// function reset() {
//     tempNumber = ""
//     numOne = 0;
//     numTwo = 0;
//     screenCalculator.innerText = "0"
// }
// resetBtn.addEventListener("click", reset)

// delBtn.addEventListener("click", function () {
//     const delitAction = tempNumber.split("")
//     delitAction.pop()
//     tempNumber = delitAction.join("")
//     if(tempNumber.length < 1){
//         tempNumber = "0"
//     }
//     screenCalculator.innerText = tempNumber
// })


// optionBtn.addEventListener("click", function(){
//     if (isClicked === "left") {
//         containerOptionBtn.style.justifyContent = "flex-end"
//         isClicked = "right"
//         return
//     } 
//     if (isClicked === "right") {
//         containerOptionBtn.style.justifyContent = "flex-start"
//         isClicked = "left"
//         return
//     }
    
// })



// equalBtn.addEventListener("click", function () {
//     numTwo = parseFloat(tempNumber)
//     switch (operation) {
//         case "+":
//             result = numOne + numTwo;
//             break;
//         case "-":
//     tempNumber = result + ""
//             result = numOne - numTwo;
//             break;
//         case "*":
//             result = numOne * numTwo;
//             break
        
//         default:
//             result = numOne / numTwo;
//     }
//     isResultCalculated = true;
//     screenCalculator.innerText = result
// })








