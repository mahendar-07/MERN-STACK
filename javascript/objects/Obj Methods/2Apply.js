console.log(`2)Apply() Method`)
console.log(`the apply method which borrows the function from the other object but we need to pass the arguments in form of array`)
console.log(` `)
var student={fn:"Bhaskara",ln:"ch",
    fullname:function(education,college){
    return this.fn+" "+this.ln+" completed "+education+" in "+college;
}
}
console.log(student.fullname.apply(student,["MBA","SVC"]))