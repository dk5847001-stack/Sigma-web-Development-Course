 console.log("Welcome to factorial world!");

/*let arr = [1, 2, 3, 4, 5];
const reduser = (a,b)=> {
    return a*b;
}
console.log("The factoreal of 5 is : ", arr.reduce(reduser));*/

alert("Welcome to factorial world!");
let number = prompt("Enter a number to calculate its factorial : ");

/*function factorial(n){
    if(n===0 || n===1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

confirm("The factorial of " + number + " is : " + factorial(number));*/
let n = 1;
for (let i = 1; i <= number; i++) {
    const fact = n * i;
    n = fact;
}
alert("The factorial of " + number + " is : " + n);
