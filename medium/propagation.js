const div_container = document.querySelector(".container")
const link1 = document.querySelector(".link1")
const link2 = document.querySelector(".link2")


// Bubbling(in to out) vs capturing(out to in) Event Propagation 
//bubble

function bubbling(){containerEvent()
link1Event()
link2Event()
console.log("bubling")}


//capturing
function capturing(){
containerEvent(true)
link1Event(true)
link2Event(true)
console.log("capturing")}

// TIY (test your self)
mybool = 0
mybool ===1 ? capturing() : bubbling();


function containerEvent(bool_val=false){
    div_container.addEventListener("click",
    (event)=>{
        console.log("container was hit!")
    },bool_val)
}
function link1Event(bool_val=false){link1.addEventListener("click" , //param 1 type of event
(event)=>{                       //param 2 function
    console.log("link1 clinked");
},bool_val); }                       //param 3 buble or propagation !!! IMPORTANT
function link2Event(bool_val=false){link2.addEventListener("click",
(event)=>{
    console.log("link2 clicked");
},bool_val);}





