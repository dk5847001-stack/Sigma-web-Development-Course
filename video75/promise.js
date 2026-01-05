console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("NO randon number was not suppporting you")
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Harry")
        }, 3000);
    }
})

    let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("NO randon number was not suppporting you")
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done2');
            resolve("Harry")
        }, 1000);
    }
})

    // let p3 = Promise.all([prom1, prom2])
    // p3.then((a)=>{
    //     console.log(a);
    // }).catch(e=>{
    //     console.log(e);
        
    // })

    // let p3 = Promise.allSettled([prom1, prom2])
    // p3.then((a)=>{
    //     console.log(a);
    // }).catch(e=>{
    //     console.log(e);
        
    // })

    let p3 = Promise.race([prom1, prom2])
    p3.then((a)=>{
        console.log(a);
    }).catch(e=>{
        console.log(e);
        
    })

// prom1.then((a) => {
//     console.log(a);

// }).catch((err)=>{
//     console.log(err);
    
// })