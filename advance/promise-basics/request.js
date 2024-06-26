//XMLHttpRequest
const requestUrl = "https://api.toys/api/coin_flip";
const xhr = new XMLHttpRequest();
let textDisplay = document.createElement("p")
xhr.open('GET' , requestUrl)
xhr.onreadystatechange = function(){  //active monitering
    console.log("state : ",xhr.readyState)
    if(xhr.readyState  === 4){
        const data = JSON.parse(this.responseText)
        json_text = data
        console.log(typeof data)
        textDisplay.innerText = "result of API based coin toss : " + String(data.result)
        document.body.appendChild(textDisplay)
        console.log(`coin flip result is => ${data.result}`)
    }
}
xhr.send();



