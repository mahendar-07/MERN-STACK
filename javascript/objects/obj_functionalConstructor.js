function User(firstname,lastname,city){
    this.firstname=firstname;
    this.lastname=lastname;
    this.city=city;
}
const user1=new User("Sandeep","Vanga","Warangal")
for(let k in user1){
    console.log(`${k}:${user1[k]}`)
}