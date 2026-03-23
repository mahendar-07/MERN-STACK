class display{
    static wish(){
        console.log("Hello Good Morning")
    }
}
var p=new display();
//p.wish()//invalid
display.wish();//valid classname.method();