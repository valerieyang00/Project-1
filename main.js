// const for HTML elements

const startBtn = document.querySelector("#startBtn")
const resetBtn = document.querySelector("#resetBtn")
const displayText = document.querySelector(".aside-btm")
const displayTime = document.querySelector(".aside-top-left")
const displayScore = document.querySelector(".aside-top-right")
const displayNo1 = document.querySelector("#first")
const displayNo2 = document.querySelector("#second")
const displayNo3 = document.querySelector("#third")
const textIns = document.querySelector(".instructions")
const insBtn = document.querySelector("#insBtn")
const hideIns = document.querySelector("#hideIns")
// const canvas = document.querySelector("canvas")
// // canvas.addEventListener("click", (e) => {
// //     console.log(e.offsetX, e.offsetY)
// // })

//Time Display including score increases per every 10 seconds played
let sec = 0;
let min = 0;
let score = 0;
let bestScore = []

function countSeconds () {
    sec += 1;
    if (sec < 10) {
        displayTime.innerText = `Time : 00 : 0${sec}`
    } else if (sec === 60) {
        min += 1;
        sec = 0;
        score += 100;
        displayTime.innerText = `Time : 0${min} : 0${sec}`
        endGame(); 
        bestScore.push(score)
        bestScoreCalc();
    } else {
        displayTime.innerText = `Time : 00 : ${sec}`
        if (sec === 10 || sec === 20 || sec === 30 || sec === 40 || sec === 50) {
            score += 20;}
    }}

//ScoreTracker
function scoreTracker () {
    displayScore.innerText = `Score : ${score}`;
}

function bestScoreCalc () {
    bestScore.sort(function(a, b){return b-a});
    if (bestScore.length === 1) {
        displayNo1.innerText = `1. ${bestScore[0]}`
        displayNo2.innerText = `2. `
        displayNo3.innerText = `3. `
    } else if(bestScore.length === 2) {
        displayNo1.innerText = `1. ${bestScore[0]}`
        displayNo2.innerText = `2. ${bestScore[1]}`
        displayNo3.innerText = `3. `
    } else {
    displayNo1.innerText = `1. ${bestScore[0]}`
    displayNo2.innerText = `2. ${bestScore[1]}`
    displayNo3.innerText = `3. ${bestScore[2]}`
    }}





// Ants set up
let antsTop = []
let antsBtm = []
let antsLeft = []
let antsRight = []
// let antsInterval = null;
let antTimeTop = 1000;
let antTimeBtm = 1000;
let antTimeLeft = 1000;
let antTimeRight = 1000;
let antLoop = true;

let randomTop = () => {
    if (antLoop) {
    if (Math.random() <= 0.1) {
        antsTop.push(new component(500, 15, 30, 20, "./media/red ant Down.png", "image"))
        setTimeout(randomTop, antTimeTop)}
    else {
        antsTop.push(new component(500, 15, 25, 10, "./media/brown ant Down.png", "image"))
        setTimeout(randomTop, antTimeTop)}}}

let randomBtm = () => {
    if (antLoop) {
    if (Math.random() <= 0.1) {
        antsBtm.push(new component(500, 835, 30, 20, "./media/red ant Up.png", "image"))
        setTimeout(randomBtm, antTimeBtm)}
    else {
        antsBtm.push(new component(500, 835, 25, 10, "./media/brown ant Up.png", "image"))
        setTimeout(randomBtm, antTimeBtm)}}}

let randomLeft = () => {
    if (antLoop) {
    if (Math.random() <= 0.1) {
        antsLeft.push(new component(10, 425, 20, 30, "./media/red ant Right.png", "image"))
        setTimeout(randomLeft, antTimeLeft)}
    else {
        antsLeft.push(new component(10, 425, 10, 25, "./media/brown ant Right.png", "image"))
        setTimeout(randomLeft, antTimeLeft)}}}

let randomRight = () => {
    if (antLoop) {
    if (Math.random() <= 0.1) {
        antsRight.push(new component(990, 425, 20, 30, "./media/red ant Left.png", "image"))
        setTimeout(randomRight, antTimeRight)}
    else {
        antsRight.push(new component(990, 425, 10, 25, "./media/brown ant Left.png", "image"))
        setTimeout(randomRight, antTimeRight)}}}

let gameArea = {
canvas : document.querySelector("canvas"),

start : function () {
    this.canvas.width = 1000;
    this.canvas.height = 850;
    this.context = this.canvas.getContext("2d");
    canvas.setAttribute('height', getComputedStyle(canvas)['height']);
    canvas.setAttribute('width', getComputedStyle(canvas)['width']);
    this.interval = setInterval(updateGameArea, 60);
    antLoop = true;
    this.topInterval = setTimeout(randomTop, antTimeTop)
    this.btmInterval = setTimeout(randomBtm, antTimeBtm)
    this.leftInterval = setTimeout(randomLeft, antTimeLeft)
    this.rightInterval = setTimeout(randomRight, antTimeRight)
    this.timerInterval = setInterval(countSeconds, 1000)
    score = 0;
    this.scoreInterval = setInterval(scoreTracker, 60)},

clear : function() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
}}


let treasure;
let kitty;
let baseTop;
let baseBtm;
let baseLeft;
let baseRight;



function startGame () {
treasure = new component(400, 320, 200, 180, "./media/pngegg.png", "image")
kitty = new component (200, 200, 130, 130, "./media/Cat 15.png", "image")
baseTop = new component(375, 10, 250, 30, "#24225C")
baseBtm = new component(375, 810, 250, 30, "#24225C")
baseLeft = new component(0, 300, 30, 250, "#24225C")
baseRight = new component(970, 300, 30, 250, "#24225C")
gameArea.start();

}

class component {
constructor (x, y, width, height, color, type) {
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;
this.alive = true;
this.type = type;
if (type == "image" || type == "background") {
    this.image = new Image();
    this.image.src = color;
}}  

    render () {
    const ctx = gameArea.context;
    if (this.type == "image" || this.type == "background") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    } else {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)}
        }}


function updateGameArea() {
gameArea.clear();
baseTop.render();
baseBtm.render();
baseLeft.render();
baseRight.render();
treasure.render();
kitty.render();

for(let i = 0; i < antsTop.length; i++) {
    antsTop[i].y += 1.3
    antsTop[i].render();
    if(detectHit(antsTop[i], treasure)) {
        endGame();
    }
}
for(let i = 0; i < antsBtm.length; i++) {
    antsBtm[i].y -= 1.3
    antsBtm[i].render();
    if(detectHit(antsBtm[i], treasure)) {
        endGame();
    }
}
for(let i = 0; i < antsLeft.length; i++) {
    antsLeft[i].x += 1.3
    antsLeft[i].render();
    if(detectHit(antsLeft[i], treasure)) {
        endGame();
    }
}
for(let i = 0; i < antsRight.length; i++) {
    antsRight[i].x -= 1.3
    antsRight[i].render();
    if(detectHit(antsRight[i], treasure)) {
        endGame();
    }

if (detectHit(kitty,baseTop)) {
    console.log ("hithit")
    clearInterval(gameArea.topInterval)
    // setTimeout(gameArea.start, 3000)
    }
if (detectHit(kitty,baseBtm)) {
    console.log ("hithit")
    // clearInterval(this.topInterval)
    // setTimeout(this.topInterval, 3000)
    }
if (detectHit(kitty,baseLeft)) {
    console.log ("hithit")
    // clearInterval(this.topInterval)
    // setTimeout(this.topInterval, 3000)
    }
if (detectHit(kitty,baseRight)) {
    console.log ("hithit")
    // clearInterval(this.topInterval)
    // setTimeout(this.topInterval, 3000)
    }

}}


//event listeners

startBtn.addEventListener("click", () => {
    startGame();
    startBtn.disabled = true;
})

insBtn.addEventListener("click", () => {
    textIns.style.display = "block"
    canvas.style.display = "none"
})

hideIns.addEventListener("click", () => {
    textIns.style.display= "none"
    canvas.style.display = ""
})


resetBtn.addEventListener("click", () => {
    antLoop = false;
    clearInterval(gameArea.interval)
    clearInterval(gameArea.timerInterval)
    displayText.innerText = "Play Again! 😸"
    gameArea.clear();
    antsTop = []
    antsBtm = []
    antsLeft = []
    antsRight = []
    constructor = null
    score = 0;
    sec = 0;
    min = 0;
    startBtn.disabled = false;
})

function movementHandler(e) {
    const speed = 50;
        switch (e.keyCode) {
            case(38):
                // move the hero up
                kitty.y -= speed;
                // kitty.y = kitty.Y
                if (kitty.y < 0) {
                    kitty.y = 0
                }    
                if (detectHitKT(kitty, treasure)) {
                    kitty.y += speed;
                }        
                break
            case(40):
                // move the kitty down
                kitty.y += speed;
                // kitty.y = kitty.Y
                if (kitty.y + kitty.height > canvas.height) {
                    kitty.y = canvas.height - kitty.height
                }
                if (detectHitKT(kitty, treasure)) {
                    kitty.y -= speed;
                }  
                break
            case(37):
                // move the kitty left
                kitty.x -= speed;
                // kitty.x = kitty.X
                if (kitty.x < 0) {
                    kitty.x = 0
                }
                if (detectHitKT(kitty, treasure)) {
                    kitty.x += speed;
                }  
                break
            case(39):
                // move the kitty right
                kitty.x += speed;
                // kitty.x = kitty.X
                if (kitty.x + kitty.width > canvas.width) {
                    kitty.x = canvas.width - kitty.width
                }
                if (detectHitKT(kitty, treasure)) {
                    kitty.x -= speed;
                }  
                break
            case(72):
                kitty.x = 200;
                kitty.y = 200;
                score -= 10;
                break
        }
    }   


document.addEventListener("keydown", movementHandler)

//detect collision

function detectHit(objOne, objTwo) {
    const left = objOne.x + objOne.width >= objTwo.x
    const right = objOne.x <= objTwo.x + objTwo.width - 10
    const top = objOne.y + objOne.height >= objTwo.y + 10
    const bottom = objOne.y <= objTwo.y + objTwo.height
    // console.log(top, left, right, bottom)
    if (left && right && top && bottom) {
        return true
    } else {
        return false
    }
}

function detectHitKT(objOne, objTwo) {
    const left = objOne.x + objOne.width >= objTwo.x + 50
    const right = objOne.x <= objTwo.x + objTwo.width - 55
    const top = objOne.y + objOne.height >= objTwo.y + 65
    const bottom = objOne.y <= objTwo.y + objTwo.height - 65
    // console.log(top, left, right, bottom)
    if (left && right && top && bottom) {
        return true
    } else {
        return false
    }
}



function endGame () {
    displayText.innerText = "Game Over 😿"
    bestScore.push(score)
    bestScoreCalc();
    clearInterval(gameArea.interval)
    clearInterval(gameArea.timerInterval)
    antLoop = false;
}

