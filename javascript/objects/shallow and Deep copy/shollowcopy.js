let user={fn:"Mahi",ln:"B",city:"BHPL"}
let u1=user;

console.log(`before modification `)
for(k in u1){
    console.log(`${k}:${u1[k]}`)
}
u1.city="USA"
console.log()
console.log(`After modification in u1`)
for(let k in u1){
    console.log(`${k}:${u1[k]}`)
}

console.log()
console.log(`modification u1 affects in user object also`)
for(let k in user){
    console.log(`${k}:${user[k]}`)
}