let user={fn:"Mahi",ln:"B",city:"BHPL"}
let u1=structuredClone(user);
u1.city="USA"
console.log("after changing city in u1")
console.log(u1)
console.log("the change in u1 will change in user")
console.log(user)
