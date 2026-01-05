let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);
arr[1] = 20;
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4]);

// console.log(arr.toString());
// console.log(arr.join(" and "));

// let a = [1,2,3,4,5,6,7,8,9];
// console.log(a.push(10));
// console.log(a);
// a.pop();
// console.log(a); // adds element at the end
// a.push(" Dilkhush ");
// console.log(a);
// a.shift(); // removes element from the start
// console.log(a);
// a.unshift("PKPER"); // adds element at the start
// console.log(a);

// delete a[9]; // deletes element but does not change length of array
// console.log(a);
/* Shift is brother of pop and unshift is brother of push */

//  let x = [1,2];
//  let y = [16,7,8];
//  let z = [11,12,13];

//  console.log(x.concat(y,z));

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.splice(0, 4, 111, 222, 3333); // (start index, number of elements to be removed, elements to be added)
console.log(number);
