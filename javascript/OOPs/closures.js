function outer(){
    let i=0;
    function inner(){
        return i++;

    }
    return inner;
}
var sum=outer();
console.log(sum);//[Function,inner]
console.log(sum());//0
console.log(sum());//1
console.log(sum());//2
