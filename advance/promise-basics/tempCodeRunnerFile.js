async function consumePromisetwo(){
    console.log("\n -->consuming async promise two \n")
    try{const response = await PromiseThree
    console.log(response)
    }
    catch(error){//for handling rejection
        console.log(error)
    }
}
consumePromisetwo()