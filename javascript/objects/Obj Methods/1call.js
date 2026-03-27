console.log(`call`)
console.log(`used to borrow the function from the another object`)
let user2={fn:"Tony",ln:"Stark",city:"USA"}
 var fullname=function(suit){
    return this.fn+" "+this.ln+" "+"city"+this.city+" "+suit;
 }
 console.log(fullname.call(user2,"Iron Man"));

console.log(``)
 console.log(`using here to borrow the function which is object`)
console.log(``)
let user={fn:"Mahendar Babu",ln:"Beddala",city:"BHPL",
    fullname:function(){
        return this.fn+" "+this.ln;
    }
}
console.log(user.fullname())
console.log(``)