console.log(`OTP Logic`)
console.log(``)
var otp="";
for(let i=0;i<5;i++){
    otp+=Math.round(Math.random()*9);
}
console.log("Generated OTP is :"+otp)
console.log(``)