import { add, subtract, divide, multiply } from '../utilities.js'

//ADD
const numberOne = document.getElementById('number-one');
const numberTwo = document.getElementById('number-two');
const solveButton = document.getElementById('solve-button');
const solution = document.getElementById('solution');

console.log(numberOne, numberTwo, solveButton, solution);

solveButton.addEventListener('click', () => {
    
    const addTotal = add(Number(numberOne.value), Number(numberTwo.value));

    solution.textContent = addTotal;

    console.log(addTotal);
});

//SUBTRACT
const numberOneSub = document.getElementById('one-sub');
const numberTwoSub = document.getElementById('two-sub');
const solveButtonSub = document.getElementById('sub-button');
const solutionSub = document.getElementById('sub-solution');

console.log(numberOneSub, numberTwoSub, solveButtonSub, solutionSub);

solveButtonSub.addEventListener('click', () => {
    
    const addTotalSub = subtract(Number(numberOneSub.value), Number(numberTwoSub.value));

    solutionSub.textContent = addTotalSub;

    console.log(addTotalSub);

});

//DIVIDE
const numberOneDiv = document.getElementById('one-div');
const numberTwoDiv = document.getElementById('two-div');
const solveButtonDiv = document.getElementById('div-button');
const solutionDiv = document.getElementById('div-solution');

console.log(numberOneDiv, numberTwoDiv, solveButtonDiv, solveButtonDiv);

solveButtonDiv.addEventListener('click', () => {

    const addTotalDiv = divide(Number(numberOneDiv.value), Number(numberTwoDiv.value));

    solutionDiv.textContent = addTotalDiv;

    console.log(addTotalDiv);
});

//MULTIPLY
const numberOneMult = document.getElementById('one-mult');
const numberTwoMult = document.getElementById('two-mult');
const solveButtonMult = document.getElementById('mult-button');
const solutionMult = document.getElementById('mult-solution');

console.log(numberOneMult, numberTwoMult, solveButtonMult, solutionMult);

solveButtonMult.addEventListener('click', () => {

    const addTotalMult = multiply(Number(numberOneMult.value), Number(numberTwoMult.value));

    solutionMult.textContent = addTotalMult;

    console.log(addTotalMult);
});





