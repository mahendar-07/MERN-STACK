var user={firstname:"Vanga",Lastname:"Sandeep Reddy",city:"Warangal"}
console.log(`1)to access the object use obj.key `)
console.log(`${user.firstname}`)
console.log(`2)to access the object use obj["key"]`)
console.log(user["firstname"])
console.log(`using forin loop `)
for(let key in user){
    console.log(`${key}:${user[key]}`)
}
console.log(`to display the keys in array format`)
console.log(Object.values(user))
console.log(Object.keys(user))
