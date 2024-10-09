let factorialNumber:number = -5
let result:number = 1

function factorialOfANumber(factorialNumber : number) {

if(factorialNumber<0)
    throw new Error(`Factorial number cannot be negative`)

    for(let i=1; i<=factorialNumber; i++){
        result=result*i
    }

    console.log(`Factorial of '${factorialNumber}' is '${result}'`);
    
}

try{
    factorialOfANumber(factorialNumber)
}catch(error){
    console.log(error);
    
}