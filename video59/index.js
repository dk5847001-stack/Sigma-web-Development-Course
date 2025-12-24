console.log("Welcome to faulty-Calculator!");
function faultyCalculator(num1, num2, operator) {
    let random = console.log("Random number : "+Math.random()*10);
    if (operator === '+') {
        if(random > 5){
            return num1 - num2; // Faulty behavior for addition
        }
        else{
            return num1 + num2;
        }
        // return num1 + num2;
    } else if (operator === '-') {
        if(random < 5){
            return num1 + num2; // Faulty behavior for subtraction
        }
        return num1 - num2;
    } else if (operator === '*') {
        if(random < 5){
            return num1 / num2; // Faulty behavior for multiplication
        }
        return num1 * num2;
    } else if (operator === '/') {
        if(random < 5){
            return num1 * num2; // Faulty behavior for division
        }
        return num1 / num2;
    } else {
        return "Invalid operator";
    }   
}
console.log(faultyCalculator(10, 5, '+')); // Output: 15
console.log(faultyCalculator(10, 5, '-')); // Output: 5
console.log(faultyCalculator(10, 5, '*')); // Output: 50 (faulty behavior)
console.log(faultyCalculator(10, 5, '/')); // Output: 2     
