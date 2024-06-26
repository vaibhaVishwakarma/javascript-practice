## project 4 
```javascript
const submit = document.querySelector('.guessSubmit');
const allInputs = []
let totalGuess = 10
const magicNum = Math.ceil(Math.random()*(100-1));
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const prev = document.querySelector(".guesses")
  const obj = document.querySelector('#guessField').value
  if (!(isNaN(Number(obj))) && Number(obj) >= 1 && Number(obj) <=100){
    const value = Number(obj)
    allInputs.push(value)
    console.log(allInputs)
    //update to total guess
    totalGuess--;
    document.querySelector(".lastResult").innerHTML = String(totalGuess);

    //update previosgames
    prev.innerHTML = allInputs.toString()

    if(value==magicNum) {
      document.querySelector(".form").setAttribute("style" , "color:#fff;background-color:#212121; padding:15px");
      document.querySelector("#guess").innerHTML=`Great! you got it \n The number is ${magicNum}`;
      
      return;
  }

    //high low
    document.querySelector(".lowOrHi").innerHTML = value<magicNum?"Low" : "High";
    //cheats
    //console.log(magicNum)

  }
  else {console.log("invalid input")}
```
## project 6
```javascript
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
let eventInterval = undefined;
function change() {
  let color = '#';
  const hex = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.ceil(Math.random() * 15)];
  }
  document.body.style.backgroundColor = color;
  return;
}

function startEvent(event) {
  //also prevents creation of multiple events
  eventInterval = eventInterval ?? setInterval(change, 1000);
  event.stopPropagation();
  return;
}
function pause() {
  clearInterval(eventInterval);
  eventInterval = undefined;
  return;
}
btnStart.addEventListener('click', startEvent, false);
btnStop.addEventListener('click', pause, false);
```
  
  
});


```
