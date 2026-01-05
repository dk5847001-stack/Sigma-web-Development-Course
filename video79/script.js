let a = prompt("Enter the first number : ")
let b = prompt("Enter the second number : ")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseFloat(a) + parseFloat(b);

function main() {
    let r = 2; 3
    try {
        console.log("The sum is : ", sum * r);
        return true
    } catch (error) {
        console.log('Error aa gya bhai !');
        return false
    }
    finally {
        console.log('files are being closed and db connection is being closed');
    }
}
let c = main()

