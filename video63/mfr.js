/*let arr = [1, 2, 3, 4, 5];
let newArr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    newArr.push(element**2);
    
}
console.log(newArr); 
*/

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((e) => {
    return e ** 2;
});
console.log(newArr);

const greaterThanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}

console.log(newArr.filter(greaterThanSeven));

let arr2 = [1, 2, 3, 4, 5];

const reducer = (a, b) => {
    return a + b;
}
console.log(arr2.reduce(reducer)); // sums all elements of array 

Array.from("Dilkhush"); // creates array from string
console.log(Array.from("Dilkhush"));