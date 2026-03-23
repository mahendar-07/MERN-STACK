class person{
    constructor(name,address,age){
        this.name=name;
        this.address=address;
        this.age=age;
    }
    details(){
        console.log(`name:${this.name} from address:${this.address} ,age:${this.age}`);
    }
}
class student extends person{
    details(){
        super.details();
        console.log("I am student")
    }
}
var p1=new student("Abhilash","kamareddy","24");
p1.details();