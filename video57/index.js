console.log("Welcome to java script");
let a = 1;

// for (let i = 0; i < 100; i++) {
//     console.log(a + i);

// }

// while(a<100){
//     console.log(a);
// a++;
// }

let obj = {
    name: "Dilkhush",
    role: "Programmer",
    company: "Dilkhush Photo Printing Centre Ajgaiva AI"
}

// forin loop
for (const key in obj) {    
    const element = obj[key];
    console.log(key,element);
}

// Forof loop
for (const c of "Dilkhush") {
    console.log(c)
}

// do while loop
let i =0;
do {
    console.log(i);
    i++;
} while (i<5);