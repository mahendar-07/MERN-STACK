function hello(cb,ed){
    setTimeout(()=>{
         console.log("hello world");
         cb(ed);
    
    },5000)
}
function greet(another){
    console.log("How are you?");
    another();
}
function display(){
    console.log(`Bye`)
}
hello(greet,display);