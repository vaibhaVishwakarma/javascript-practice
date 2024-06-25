//string interpolation == fstring

const v1 = "vaibo"
const v2 = "new var"
console.log(`this is a fstring containg\nvar1: ${v1} & var2: ${v2}`)
const v3 = new String("new var3")


let var1 = 400
let var2 = new Number(100)
console.table({"var1" : var1 , "var2" : var2});
console.log(var2)
console.log(Math.random())


//object freeze 
let dict1 = {
    username :"reet",
    email:"reet@vit.com"
}
let dict2= dict1;
Object.freeze(dict1)
dict2.email="reet@google.com"
console.log("\n heap")
console.table([dict1 , dict2])
// no change in dict 2 also as the refered obj is freezed 


//nested objects 
let d3 = {}
d3.l0 = {user : { element : { item : "bum"}}}
console.log(d3.l0? "true" : "False" ); //LAter **** 



//assigning value to a variable

var {username:user} =dict1 // user becomes a variable
console.log(user);  


var c = 6 
if(true){
    let a = 2  // changes only in the scope
    const b = 4  // only locally (inside scope)
    var c = 8 // changes globally 
    //Child can access parent , but not reverse!
    console.log(`\nscope testing : inside if scope & global dict is accessable ${dict1}`)
}
console.log("\nScope");
console.log([c]); // a & b can not be accessed but c can be called

console.log("\nfunction initialisation! ORDER MATTERS !HOISTING") 
console.log(addOne(5)) // executes even before function definition
function addOne(num){ 
    return num*10
}


// console.log(addTwo(5))  // does not exceute in this case
const addTwo = (num) => {
    return num*10
}
// console.log(addTwo(5)) // does not print in this case 
let result = addTwo(5) // only executes by saving the returned value
console.log(result)



//function & THIS

function temp(){
    let user = "something"
    console.log(`\nthis is a regular function ${this}`) // many propertires
    //console.log(this.user) //not availble
}
const tempfun = () => {
    console.log(`this is arrow function ${this}`) // this = {}
}
temp()
let _ = tempfun()

const tempfun2 = (()=>"this is a lambda function or IMPLICIT return")
console.log(tempfun2());

//()();
(function chai() {console.log("named IIFE function ")}
)();
//chai() this one cannot be called as IIFE only used to avoid global Pollution
//unnamed IIFE (Immediately invoked funtions expressions)
//un-named IIFE : (()=>{})();