function sum(a,b){
    return a+b;
}
console.log(sum(5,7));
console.log(``);
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }    
}
console.log(add(10)(7)(9))
console.log(`another ways of currying  `)
function multiply(a){
    return function(b){
        return a*b;
    }
}
var double=multiply(2);
var triple=multiply(3);
console.log(double(5));
console.log(triple(5));
