console.log("Dilkhush")

// Class Selector
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// id Selector
// document.getElementById("red").style.backgroundColor = "red";

// querySelector
// document.querySelector("#red").style.backgroundColor = "green";
// document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box").forEach(e => {
    console.log(e);
    e.style.backgroundColor = "green"
})