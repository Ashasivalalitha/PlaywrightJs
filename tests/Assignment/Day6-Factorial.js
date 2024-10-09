var factorialNumber = -5;
var result = 1;
function factorialOfANumber(factorialNumber) {
    if (factorialNumber < 0)
        throw new Error("Factorial number cannot be negative");
    for (var i = 1; i <= factorialNumber; i++) {
        result = result * i;
    }
    console.log("Factorial of '".concat(factorialNumber, "' is '").concat(result, "'"));
}
try {
    factorialOfANumber(factorialNumber);
}
catch (error) {
    console.log(error);
}
