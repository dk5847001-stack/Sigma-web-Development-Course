
// Function 
function nice(name){
    console.log("Hey "+ name + " you are nice!");
    console.log("Hey "+ name + " you are nice!");
    console.log("Hey "+ name + " you are good!");
    console.log("Hey "+ name + " you are tshirt isnice!");
    console.log("Hey "+ name + " you are nice too!");
}

// nice("Rohan")
// nice("Dilkhush")

// function sum(a, b){
//     console.log(a+b);
// }

// sum(2,3)

function sum(a, b, c = 10){
    // console.log(a+b);
    return a+b+c;
}

Result1 = sum(2,3);
Result2 = sum(24,3);
Result3 = sum(2,32);

// console.log("The sum of these numbers is : ",Result1);
// console.log("The sum of these numbers is : ",Result2);
// console.log("The sum of these numbers is : ",Result3);

// Arrow Funtion
const func1 = (x)=>{
    console.log("I am an arrow funtion",x);
}
func1(23);
func1(33);
func1(24);
func1(22);

// console.log("Hey Dilkhush you sare nice!");
// console.log("Hey Dilkhush you sare good!");
// console.log("Hey Dilkhush you sare tshirt is nice!");
// console.log("Hey Dilkhush you sare good too!");