"use strict"; // treal all code as new version
//alert(3+3)  only for browser not node 


// number -> 2 ^ 53 
//bigint
//str , bool , null 

console.log(0== null); // false
console.log(undefined == null); // true 

// symbol (React)

console.log(typeof(null))//object
console.log(typeof(undefined));//undefined  
// now is object == undefined ? True :) #exception1
 
let score = "33" //typeof score == string
let valueofscore = Number(score);
console.log("\nconversion");
console.log(valueofscore);
console.log(Number("33abas")) // typeof Number("33abs") == NaN "not a number" :) #exception2

console.log("\noperations");
console.log("1" + 2 +3 );
console.log(2+3+"1");//exception3



//strict check
console.log("\nstrict check");
console.log("2" === 2);


//symbol
let a = Symbol("123");
let b = Symbol("123");
console.log("\nsymbol exception");
console.log(a===b);
console.log(a);
console.log(b);


//function
const MyFunc = () => {
    console.log("\nthis is a function");
};
MyFunc; // nothing happens 
MyFunc(); // function runs
console.log(typeof(MyFunc)) // return function <- actually it is object function



console.table(["heap <- reference" , "stack <- copy"]);

let var1 = "ankit";
let var2 = "pratik";
var2 = "tushar";
console.log("\nstack");
console.log({"var1":var1,"var2":var2})

let dict1 = {
    username :"reet",
    email:"reet@vit.com"
}
let dict2= dict1;
dict2.email="reet@google.com"
console.log("\n heap")
console.table([dict1 , dict2])