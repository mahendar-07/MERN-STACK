console.log(`3)bind() Method`)
console.log(`the bind method borrows the function from the other object but it returns a bounding function  insteading of executing directly`)
console.log(``)

var student={fn:"bhaskara",ln:"ch",
    details:function(education,college){
        return this.fn+" "+this.ln+" Completed "+education+" in "+college;
    }
}
console.log(student.details.bind(student,"MBA","SVC"))
//[Function :bound details]
console.log(``)

let result=student.details.bind(student,"MBA","SR");
console.log(result())
console.log(``)
