
//1.

// let checkResolve = true; // if  not true process in not complete and promise is not resolved
// const promiseOne = new Promise(function(resolve , reject){
//  setTimeout(() => {
//     console.log("aync task is complete")
//     if(checkResolve) resolve();
//     else{console.log("promise NOT resolved or consumed \n"+
//     "-->process Incomplete")}
//  }, 1000);   
// })
// promiseOne.then(()=>{
//     console.log("promise is consumed\n process complete");
// })





// 2.

const promiseTwo = new Promise((resolve , reject)=>{
    let error = false;
    if(!error){
    setTimeout(() => {
        const apiData = {username : "vaibo" , email : "js@example.com"}
        resolve(apiData)
    }, 1000);
}
    else{
        reject("E: network error Connection not establised")
    }

});

promiseTwo
.then(function(data){
    console.log("recieved data ",data)
    return data.email
}).then((email)=>{ // picking data from then CHAINED THEN Call 
    console.log("recieved email :" , email)
}).catch((error)=>{
    console.log(error)
}).finally(
    console.log("PromiseTwo handled") //surprisingly finally block executes before any of then or catch!!
);

// 3.

async function consumePromisetwo(){
    console.log("\n -->consuming async promise two")
    try{const response = await promiseTwo
    console.log(response)
    }
    catch(error){//for handling rejection
        console.log(error)
    }
    console.log("finished the async consume promise Two\n\n")
}
consumePromisetwo()
    

//4.
async function getCoinFlip(){
    console.log("\nasync Fetch ! start ")
    try {
        const response = await fetch("https://api.toys/api/coin_flip")
      //const data =       response.json()  // await is neccessory
        const data = await response.json()
        console.log("coin flipped !  got ", data)
    } catch (error) {
        console.log(error)
    }
    console.log("async fetch complete !")
}

getCoinFlip()


//5. 
let urlToFetch = "https://api.github.com/users/vaibhaVishwakarma"
fetch(urlToFetch)
.then((response)=>{
    console.log("response recieved")
    return response.json()   // simply return with out any post processing as default it awaits , else response ==<pending> ! post process only in next then !!
})
.then((response2)=>{
    console.log("recieved public repos: ",response2.public_repos)
})
.catch((error)=> console.log(error))
.finally(()=>console.log("5. direct fetch completed \n "))



