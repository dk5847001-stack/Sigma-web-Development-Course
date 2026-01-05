let a = [1, 32, 23, 4];

 /*for (let index = 0; index < a.length; index++) {
    console.log(a[index]);
 }*/

   /* a.forEach((value, index, arr) => {
        console.log(value, index, arr);
    });*/

    /*let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(key,"= "+element);
        }
        
    }*/

        for (const iterator of a) {
            console.log(iterator);
        }