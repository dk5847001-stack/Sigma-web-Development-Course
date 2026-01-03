class User{

    constructor(name){
        // invokes the setter
        this.name = name;
    }
    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("Name is too short.")
            return;
        }
        this._name = value;
    }
}
let user = new User("Dilkhush")
console.log(user.name);
user = new User("");