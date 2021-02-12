// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, divide, multiply } from '../utilities.js';


const test = QUnit.test;

//ADD
test('time to test add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const sum = 9;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

//SUBTRACTION
test('time to test sub', (expect) => {
    const x = 6;
    const y = 4;
    const sum = 2;

    const result = subtract(x, y);

    expect.equal(result, sum);
});

//DIVISION
test ('time to test div', (expect) => {
    const x = 6;
    const y = 2;
    const sum = 3;

    const result = divide(x, y);

    expect.equal(result, sum);
    
});

//MULTIPLICATION
test ('time to test mult', (expect) => {
    const x = 3;
    const y = 3;
    const sum = 9;

    const result = multiply(x * y);

    expect.equal(result, sum);
})


