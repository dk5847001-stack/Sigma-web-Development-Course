alert("Hello World!");

var a = prompt("Enter a number : ")
var isTrue = confirm("Are you sure you want to leave this page and blast your computer")

if(isTrue){
    console.log("Computer is blasting")
}
else{
    console.log("Computer is not blasting")
}
console.log("your number is : "+a)

document.title = "Hey I am good"

document.body.style.backgroundColor = "red"