class display{
    #greet=""//private field
    constructor(greet){
        this.#greet=greet;
    }
    greetnow(){
        console.log(`Hello ${this.greet}`)
        console.log(`Hello ${this.#greet} using # to access the private field`)
    }
}
var p=new display("Grow Tech");
p.greetnow();//hello  undefined
