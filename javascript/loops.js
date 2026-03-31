var num=1234;
var copy=num;
console.log(`the given number is : ${num}`)
console.log(" ")
//to count number of digits 
console.log(`1.to count number of digits`)
var count=0;
while(num!=0){
    num =parseInt(num/10);
    count++;
}
console.log(`no of digits in the number is ${count}`);
console.log("  ")
//sum of the digits in a number
console.log(`2.sum of the digits in a number`)
var num=copy;
var sum=0;
var rem=0;
while(num!=0){
 rem=num%10;
 sum+=rem;
 num = parseInt(num/10);
}
console.log(`sum of the digits in the number is: ${sum}`)
console.log(" ")
 
//reverse of a number 
console.log("3.reverse of a number ")
var num=copy
var rev="",rem=0;
while(num!=0){
    rem=num%10;
    rev=rev+rem;
    num=parseInt(num/10)
}
console.log(`reverse of a number is ${rev}`)

//4.to check a given number is in pallindrome or not 
console.log(`to check a given number is pallindrome or not`)
var num=copy
var rev=" ",rem=0
while(num!=0){
    rem=num%10
    rev=rev+rem
    num=parseInt(num/10)
}
console.log(num==rev? `Pallindrome`:`not pallindrome`)
console.log(" ")
//5.Armstrong 
console.log("5.Armstrong of a number")
var num1=153
var num2=num

var digits=0,newnum=0,rem=0
while(num1!=0){
    num1=parseInt(num1/10)
    digits++;
}
num1=num2
while(num1!=0){
    rem=num1%10;
    newnum=rem**digits;
    num1=parseInt(num1/10);
}
console.log(newnum==num2 ? `Armstrong`:`not a pallidrome` )