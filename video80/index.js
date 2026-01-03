// console.log('welcome to object oriented programing!');
// let obj = {
//     a : 1, 
//     b : "Dilkhush"
// }
// console.log(obj);

// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }
// rabbit.__proto__ = animal;

class animal{
    constructor(name){
        this.name = name;
        console.log('Object is created...');
    }
    eats(){
        console.log("I am eating");
    }
    jumps(){
        console.log("I am jumping");
    }
    play(){
        console.log("I am playing");
    }
}
let a = new animal("Dilkhush")
console.log(a);

class lion extends animal{
    constructor(name){
        super(name)
        console.log('Object is created and he is a lion...');
    }
    eats(){
        super.eats()
        console.log('I am eating and roor');
    }

}
let l = new lion("shera")
console.log(l);

