function checker(age){
 new Promise((res,rej)=>{
    
    if(age>18){
        res(`age is ${age} allowed to A+ movies`)
    }
    else{
        rej(`age is ${age} not allowed`)
    }
})
.then((msg)=>console.log(msg))
.catch((data)=>console.log(data))
}
checker(19);
checker(16);
