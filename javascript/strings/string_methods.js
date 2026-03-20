console.log(`hello welcome to the string operations/methods`)
console.log(`String is immutable in javascript`)
console.log(`String Methods are`)
console.log(``)
console.log(`1)length - it gives the length of the string`);
console.log(``)
var str="Hello"
console.log(`length (str.length) str="Hello" ${str.length}`)
console.log(``)
var str=""
console.log(`str="" ${str.length}`)
console.log(``)
var str;
console.log(`str ${str.length}`)
console.log(``)
console.log(`2)toUpperCase -it converts the text into upper case`)
console.log(``)
var upp="hello"
console.log(``)
console.log(`upp=hello : ${upp.toUpperCase()}`)
console.log(``)
var low="HELLO"
console.log(``)
console.log(`3)toLowerCase :`)
console.log(`low="HELLO" :${upp.toLowerCase()}`)
console.log(``)
console.log(`4)slice -used for copying and extraction`)
console.log(``)
var fruits =["banana","Mango","Papaya","Apple","Grapes","PineApple","Orange","Promogranate"];
console.log(`var fruits =["banana","Mango","Papaya","Apple","Grapes","PineApple","Orange","Promogranate"];
`)
console.log(`fruits.slice(2,5) ${fruits.slice(2,5)}`)
console.log(`fruits.slice(-1) ${fruits.slice(-1)}`)
console.log(`fruits.slice(-6) ${fruits.slice(-6)}`)
console.log(`fruits.slice(0,-5) ${fruits.slice(0,-5)}`)
console.log(`5)substring :start,end index,doesn't accept negative values`)
var substrr="JavaScript"
console.log(`${substrr} substr.substring(1,5): ${substrr.substring(1,5)}`)
console.log(`${substrr} substr.substring(1,0): ${substrr.substring(1,0)}`)
console.log(`${substrr} substr.substring(0,9): ${substrr.substring(0,9)}`)
console.log(``)
var s=["Writer","Director","Protagonist","Antagoinst","Supporting Character","Anti-Hero","Narrator"]
console.log(``)
console.log(`6)substr`)
console.log(``)
console.log(`7)indexOf-> search for the element in the array or string and returns the index`)
var stind="WoW Beautiful.."
console.log(`${stind} is stind.indexOf(3) is ${stind.indexOf(3)}`)
console.log(`${stind} is stind.indexOf("B")} is ${stind.indexOf("B")}`)
console.log(`${stind} is stind.indexOf(" ")} is ${stind.indexOf(" ")}`)
console.log(`${stind} is stind.indexOf("")} is ${stind.indexOf("")}`)

console.log(`8)lastIndexOf ->searches from last and returns the last index if found otherwise returns -1`)
var lasind="Banana"
console.log(`${lasind} lasind.lastIndexOf("a") is ${lasind.lastIndexOf("a")}`)
console.log(`with array lastindexOf`)
var lasind=[1,2,3,4]
console.log(`${lasind} is lastIndexOf(3) is ${lasind.lastIndexOf(3)}`)
console.log(``)
console.log(`9)search -> searches for the element in the string and returns`)
var ser="Hello JavaScript !.."
console.log(`${ser} ,ser.search("Java") is ${ser.search("Java")}`)
console.log(`${ser} ,sersearch("hello"/i) is ${ser.search(/hello/i)}`)
console.log(`${ser} ,sersearch("hey") is ${ser.search("hey")}`)
console.log(``)
console.log(`10)match -> returns all the matches of the string `)
var mat="I am Lerning JavaScript in a clean practice ,javascript practice makes improvement "
console.log(`${mat} is mat.match("Java") is ${mat.match("Java")}`)
console.log(`${mat} is mat.match(/Java/gi) is ${mat.match(/Java/gi)}`)
console.log(`${mat} is mat.match("Heloo") is ${mat.match("Heloo")}`)
console.log(``)
console.log(`11)repeat -> repeating the string specified number of times`)
var rep="Hey chotu..!"
console.log(`${rep} is rep.repeat(3) is ${rep.repeat(3)}`)
var dash="-"
console.log(`${dash.repeat(33)}`)
console.log(``)
console.log(`12)replace -> only replacces the first occurance of the string `)
var repl="I am learning javascript ,improving javascript day by day "
console.log(`${repl}`);
console.log(`repl.replace("javacript",Java)`);
console.log(`${repl.replace("javascript","Java")}`);
console.log(`replaceALL`);
console.log(`${repl.replaceAll("javascript","Java")}`);
console.log(`original :${repl}`);
console.log(``);
console.log(`13)starWith -> to check a string is starting with a particular string `);
var strt="hello javascript";
console.log(`${strt}`);
console.log(`strt.startsWith("hello") is ${strt.startsWith("hello")}`);
console.log(`strt.startsWith("hy") is ${strt.startsWith("hy")}`);
console.log(`strt.startsWith("j") is ${strt.startsWith("j",6)}`);
console.log(``);
console.log(`14)endsWith() -> checks ending of the string `);
const file="firstjava.pdf"
console.log(`${file}`);
console.log(`file.endsWith(".pdf") is ${file.endsWith(".pdf")}`);
console.log(``);
console.log(`15)padStart -> adds padding to the begining of the string`);
var pdstrt="5"
console.log(`${pdstrt} ,pdstrt.padStart(1,"*") is ${pdstrt.padStart(3,"*")}`);
for(let i=0;i<=5;i++){
console.log(i.toString().padStart(3,"0"));
    
}
console.log(``);
console.log(`16)padEnd -> adds padding to the end of the string `);
var pded="5"
console.log(`${pded},pded.padEnd is ${pded.padEnd(3,"*")}`);
console.log(``);
for(let i=0;i<=5;i++){
    console.log(i.toString().padEnd(3,"#"));

}
console.log(``);
console.log(`17)split ->based on a separator the string is breaked into an array`);
var splt="Hi ! hello..! nice..! ok..! Bye..!";
console.log(`${splt}`);
console.log(`splt.split("") -> ${splt.split("")}`);
var arr=splt.split("..!")
console.log(`splt.split("") -> ${arr}`);
console.log(``);
console.log(`18)concat -> merges the two strings`);
var str1="hey hey hey"
var str2="build something crazy never imagined ".concat(str1);
console.log(`${str2}`);
console.log(``);
console.log(`20)trim -> It is used to eliminate the whitespaces in the string `);
var trm="      check check check check check      "
console.log(`${trm}`);
console.log(`trm.trim(), ${trm.trim()}`);
console.log(`trimStart `);
console.log(`${trm.trimStart()}`);
console.log(`trimEnd`);
console.log(`${trm.trimEnd()}`);




console.log(``)



