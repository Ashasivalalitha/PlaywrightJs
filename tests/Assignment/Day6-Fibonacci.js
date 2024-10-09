const nthNumber = -15
let firstNumber = 0
let secondNumber = 1
let result = 0

function fibonacci(firstNumber, secondNumber) {

    console.log(`Inputted nth number : ${nthNumber}`);

    if (nthNumber < 0)
        throw new Error("Number cannot be negative");
    else {
        console.log(firstNumber);
        console.log(secondNumber);
        for (let i = 1; i < (nthNumber - 1); i++) {
            result = firstNumber + secondNumber
            firstNumber = secondNumber
            secondNumber = result
            console.log(result);
        }
        console.log(`'${nthNumber}'th number in fibonacci series is '${result}'`);
    }
}
try {
    fibonacci(firstNumber, secondNumber)
}
catch (error) {
    console.log(error);
}