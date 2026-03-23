class display{
    constructor(fullname,Addrress,age){
        this.fullname=fullname;
        this.Addrress=Addrress;
        this.age=age;
    }
     display(){
        console.log(`${this.fullname} ,${this.Addrress} ,${this.age}`);

    }
}
var d=new display("Mahi","BHPL","24");
d.display();
