console.log(a1);
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a,b,c){
    return a+b+c;
}

(async function main() {



    // --------  IIFE(Imediatily invoke function expression) CONCEPT -----------
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

// -------------  DESTRUCTURING -----------------
    // let [x, y, ...rest] = [1, 5, 7, 8, 9]
    // console.log(x, y, rest);
    
    // -------------  DESTRUCTURING -----------------
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let {a, b} = obj
    console.log(a, b);
    
    let arr = [1,4,6]
    console.log(arr[0] + arr[1] + arr[2]);
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));

 
})()
    // -------------  HOSTING -----------------
    //---------- let and const me HOsting nahi hoti hai ---------------------
   var a1 = 6;
