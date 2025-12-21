console.log("Hello I am conditional tutorial ok");
let age = 12;
let grace = 2;
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);
if((age+grace) > 17){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}
/* 
Ternary Operator
*/
let a = 2;
let b = 6;
console.log(a>b?(a-b):(b-a));