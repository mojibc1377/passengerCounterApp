//document.getElementById("count-el").innerText = 5 

// let firstBatch = 5
// let secondBatch = 7 


// let count = firstBatch + secondBatch

// let myAge = 35 
// let humanDogRatio = 7
// let dogAge = myAge * humanDogRatio
// console.log(dogAge)
 
// let count = 5
// count = count + 1
// console.log(count) 
// function increment() {
//     console.log("the button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// function log42() {
//     console.log(42)
// }
// log42()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36 

// function logLapTime(){
//     console.log( lap1+ lap2+ lap3)
// }
// logLapTime()

let lapsCompleted= 0
let countEl = document.getElementById("count-el")
let checkpoint = document.getElementById("checkpoint")
function increment(){
    lapsCompleted += 1
    console.log(lapsCompleted);
    countEl.innerText = lapsCompleted
}
function save(){
    console.log(lapsCompleted)
    checkpoint.textContent += String(lapsCompleted)+ ' , '
    lapsCompleted = 0
    countEl.textContent = 0
}



