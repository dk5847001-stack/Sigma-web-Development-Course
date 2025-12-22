
faultyCalculator();
function faultyCalculator() {
    let random = Math.random();
    let a = prompt("Enter the 1st number : ");
    let c = prompt("Enter the operation : ");
    let b = prompt("Enter the 2st number : ");

    let obj = {
        "+": "-",
        "-": "/",
        "*": "+",
        "/": "**"
    }
    if (random > 0.1) {
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    }
    else {
        c = obj[c];
        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    }
    faultyCalculator();
}


