//FALSY VALUES
//false , 0 , -0(NEG) , BigInt 0n , "" , null , NaN , undefined 

//TRUTHY VALUES
//[] , {} , function(){}  ," "


let val1 = undefined ?? 5 // works
val1 = null ?? 10 // works
console.log(val1);
val1 = false??12
console.log(val1);

// statement ? task : task TURNERY WORKS SMAE MANNER
let arr=[1,2,34,4,2]
for(const item of arr){
    console.log(item)
}

let m = new Map()
m.set("In","cricket")
m.set("EN","football")
for(const obj of m){
    console.log(obj)
}
for(const  [key , value] of m ){ //of != in 
    console.log(key , ":" ,value)
}
for(const key in arr){
    console.log(`index ${key} is ${arr[key]}`)
}

arr.forEach((item)=>{console.log(item)})
console.log("each iter also has index and total arr")
arr.forEach((item , index , arr)=>{console.log({item , index , arr})})

console.log("FILTER",arr.filter((num)=>num>3))
console.log("MAP" , arr.map((num)=>num*10))


const sum = arr.reduce((acc,curr)=>acc+curr,0) // reduce(function , initial value to start from)
console.log("arr total sum ", sum) 