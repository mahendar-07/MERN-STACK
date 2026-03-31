//to access the array elements there are 3 ways 
//i)through the direcly 
//ii)iterative with for loop
//iii)for of loop

console.log(`array accessing using three different ways`)
console.log(``)
console.log(`i)direct approach`)
var arr=[10,3,30,40,51]
console.log(arr)
console.log(`ii)using through the iterative fashion`)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]) //can I print them without new line ?
}
console.log(``)
console.log(`iii)using for of`)
for(let a of arr){
    console.log(a)
}
console.log(``)

//to check an element is even in array 
console.log(`1)to check a elements in an array is even number `)

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}
console.log(``)

//program to find the largest element in the array
console.log(`2)program to check the largest element in the array`)
var max=arr[0]
for(let i of arr){
    if(max<i){
        max=i
    }
}
console.log(`largest element in the array is ${max}`)
console.log(``)

//3)program to find the min element in the array
console.log(`2)program to check the smallest element in the array`)
var min=arr[0]
for(let i of arr){
    if(min>i){
        min=i;
    }
}
console.log(`smallest element in the array is ${min}`)
console.log(``)

//4)basic operation in array
console.log(`4) basic operation in array `)
console.log(`original array is :${arr}`)
console.log(`if (arr+1) is ${arr+1}`)
console.log(``)
console.log(`if (arr*1) is ${arr*1}`)
console.log(``)
console.log(`if (arr-1) is ${arr-1}`)
console.log(``)
console.log(`if (arr/1) is ${arr/1}`)
console.log(``)
console.log(`if (arr%1) is ${arr%1}`)
console.log(``)
console.log(`if (arr^1) is ${arr^1}`)
console.log(``)
console.log(`if (arr>1) is ${arr>1}`)
console.log(``)
arr[7]=9
console.log(`if arr[7]=9 is ${arr}`)
console.log(`array length is ${arr.length}`)
console.log(``)
console.log(`different types of data can be supported by the array`)
var arr2=[1,5,true,5.9,11,"js"]
console.log(arr2)
console.log(``)
console.log(`if (arr2+1) is ${arr2+1}`)
console.log(``)
console.log(`if (arr2*1) is ${arr2*1}`)
console.log(``)

//array destructuring concept
var cars=["buggati","ford","mcLaren","Lambo","Audi","Tesla","Naya"]
var [...restofcs]=cars;
console.log(`the array is ${cars}`)
console.log(``)
//console.log(`if c1 is ${c1}`)
console.log(``)
//console.log(`if c2 is ${c2}`)
console.log(``)
console.log(`if restofcs is ${restofcs}`)
console.log(``)
console.log(`if var[c1,c2,c3,...restofcs]=cars`)
var [c1,c2,c3,...restofcs]=cars
console.log(``)
console.log(`if c1 ${c1}`)
console.log(``)
console.log(`if c2 is ${c2}`)
console.log(``)
console.log(`if c3 is ${c3}`)
console.log(``)
console.log(`if resofcs is ${restofcs}`)
//
console.log(``)
console.log(`using the rest`)
function sum(...a){
    return a.reduce((acc,i) => acc+i);

}
console.log(sum(8,9,10,11,12,22,33))
console.log(``)
console.log(`using typeof for arr`)
console.log(``)
console.log(`typeof arr is ${typeof arr}`)
console.log(``)
console.log(``)
console.log(`Array Methods `)
var letter=["A","B","C","D","E","F"]
console.log(`the original array is ${letter}`)
console.log(`1)push(push a element at end) -->letter.push("Z")`)
letter.push("Z")
console.log(`modified:${letter }`)
console.log(``)
console.log(`2)pop(last element removes) -->letter.pop()`)
letter.pop()
console.log(`modified:${letter}`)
console.log(``)
console.log(`3)shift(first element removes) -->letter.shift`)
letter.shift()
console.log(`modified: ${letter}`)
console.log(``)
console.log(`4)unshift(insert a element at begining) -->letter.unshift("Y")`)
letter.unshift("Y")
console.log(`modified: ${letter}`)
console.log(``)
console.log(`5)delete(deletes an element but the position remains same) -->delete letter[2]`)
delete letter[2]
console.log(`modified:${letter}`)
console.log(``)
console.log(`6)splice(add or remove element at any position of the array)`)
console.log(`splice(start pos,no of elements add or remove ,elements that can be add)`)
letter.splice(2,3,"H","I","J")
console.log(`modified :${letter}`)
console.log(``)
console.log(`7)slice(create subarray)-->slice(start position,end position)`)
console.log(`subarray 1 to 4:${letter.slice(1,4)}`)
console.log(``)
console.log(`8)indexOf --> return the first occurence of the element in the array`)
var index=letter.indexOf("I")
console.log(`returned index of I :${index}`)
console.log(``)
console.log(`9)lastIndexOf(returns the last occurence of the element -->letter.lastIndexOf() )`)
var lastindex=letter.lastIndexOf("H")
console.log(`last index of H:${lastindex}`)
console.log(``)
console.log(`10)sort :sorting elements in the ascending or descending order`);
var ele=[5,55,9,10]
console.log(`normal sort() folows the dictionary type = ${ele.sort()}`)
console.log(`for ascending order :.sort((a,b)=>a-b)`)
console.log(`original array:${ele}`)
console.log(``)
console.log(`sorted array in ascending: ${ele.sort((a,b)=>a-b)}`)
console.log(``)
console.log(`for descending order:.sort((a,b)=>b-a)`)
console.log(``)
console.log(`sorted array in descending:${ele.sort((a,b)=>b-a)}`)
console.log(``)
console.log(`11)reverse -> .sort().reverse()`)
console.log(` with reverse ${ele.sort().reverse()}`)
console.log(`12)join -to convert an array into the string`)
var jn=ele.join()
console.log(`${jn}`)
console.log(``)
console.log(`13)concat ->concactination is the adding two different Strings into one `)
var a1=["A","B","C","D"]
var a2=["Y","Z","X","W"]
console.log(`a1 :${a1}`)
console.log(`a2 :${a2}`)
var con=a1.concat(a2)
console.log(`${con}`)
console.log(``)
console.log(`14)forEach -> used to iterate all the values of an array by applying function to every element`)
console.log(``)
var foreah=[1,2,3,4,5,6,7];
console.log(`original array: ${foreah}`);
console.log(``)
console.log(`just traversing it with using foreach and function way`);
foreah.forEach(add);
function add(a){
    console.log(a+1);
}
console.log(``)
console.log(`does original array got changed? let's check ${foreah}`)
console.log(``)
console.log(`15)Map :`)
