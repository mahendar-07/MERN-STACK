function hello(){
    console.log("Hello function");
    
}
console.log(`Good afternoon`);
setTimeout(hello,3000);
console.log("Bye...!")
console.log(``)
console.log(``)
function he1(){
    console.log("hello goodie");
    console.log(``)

}
console.log("building something crazy")
setTimeout(he1,0);
console.log("let's build")
console.log(``)
console.log(``)


for(var i=0;i<=5;i++){
    setTimeout(()=>{console.log(i);},6000)
}
console.log(``)
console.log(``)
console.log(``)

for(let i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i);

    },10000)
}
