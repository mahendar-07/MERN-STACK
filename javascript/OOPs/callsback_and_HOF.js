console.log(` callbacks and higher order functions`)
function hello(a){
    setTimeout(()=>{
        console.log("hello World");
        a();
    },5000)
}
function greet(){
    console.log("How are you");
}
//console.log(`without using the callbacks`)
//hello();
//greet();
console.log(`using the callback and HOF`)
hello(greet);
