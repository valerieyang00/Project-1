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
let antLoopTop = true;
let antLoopBtm = true;
let antLoopLeft = true;
let antLoopRight = true;

let randomTop = () => {
    if (antLoopTop) {
    if (Math.random() <= 0.1) {
        antsTop.push(new component(500, 15, 30, 20, "./media/red ant Down.png", "image", "red"))
        setTimeout(randomTop, antTimeTop)}
        else {
        antsTop.push(new component(500, 15, 25, 10, "./media/brown ant Down.png", "image", "brown"))
        setTimeout(randomTop, antTimeTop)}}}

let randomBtm = () => {
    if (antLoopBtm) {
    if (Math.random() <= 0.1) {
        antsBtm.push(new component(500, 835, 30, 20, "./media/red ant Up.png", "image", "red"))
        setTimeout(randomBtm, antTimeBtm)}
    else {
        antsBtm.push(new component(500, 835, 25, 10, "./media/brown ant Up.png", "image", "brown"))
        setTimeout(randomBtm, antTimeBtm)}}}

let randomLeft = () => {
    if (antLoopLeft) {
    if (Math.random() <= 0.1) {
        antsLeft.push(new component(10, 425, 20, 30, "./media/red ant Right.png", "image", "red"))
        setTimeout(randomLeft, antTimeLeft)}
    else {
        antsLeft.push(new component(10, 425, 10, 25, "./media/brown ant Right.png", "image", "brown"))
        setTimeout(randomLeft, antTimeLeft)}}}

let randomRight = () => {
    if (antLoopRight) {
    if (Math.random() <= 0.1) {
        antsRight.push(new component(990, 425, 20, 30, "./media/red ant Left.png", "image", "red"))
        setTimeout(randomRight, antTimeRight)}
    else {
        antsRight.push(new component(990, 425, 10, 25, "./media/brown ant Left.png", "image", "brown"))
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
    antLoopTop = true;
    antLoopBtm = true;
    antLoopLeft = true;
    antLoopRight = true;
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
constructor (x, y, width, height, color, type, desc) {
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;
this.alive = true;
this.type = type;
this.desc = desc;
if (type == "image") {
    this.image = new Image();
    this.image.src = color;
}}  

    render () {
    const ctx = gameArea.context;
    if (this.type == "image") {
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
hitAntTreasure();
hitBases();
hitAnts();
}


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
    antLoopTop = false;
    antLoopBtm = false;
    antLoopLeft = false;
    antLoopRight = false;
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
let speedT = 1.3
let speedB = 1.3
let speedL = 1.3
let speedR = 1.3

function hitAntTreasure () {
    for(let i = 0; i < antsTop.length; i++) {
        antsTop[i].y += speedT
        antsTop[i].render();
        if(detectHit(antsTop[i], treasure)) {
            endGame();
        }
    }
    for(let i = 0; i < antsBtm.length; i++) {
        antsBtm[i].y -= speedB
        antsBtm[i].render();
        if(detectHit(antsBtm[i], treasure)) {
            endGame();
        }
    }
    for(let i = 0; i < antsLeft.length; i++) {
        antsLeft[i].x += speedL
        antsLeft[i].render();
        if(detectHit(antsLeft[i], treasure)) {
            endGame();
        }
    }
    for(let i = 0; i < antsRight.length; i++) {
        antsRight[i].x -= speedR
        antsRight[i].render();
        if(detectHit(antsRight[i], treasure)) {
            endGame();
        }}}
 
 let stateBaseTop = true;
 let stateBaseBtm = true;
 let stateBaseLeft = true;
 let stateBaseRight = true;       
 

 function hitBases () {
    if (stateBaseTop) {
    if (detectHit(kitty,baseTop)) {
        score += 30;
        antTimeTop += 2000;
        speedT = 0;
        setTimeout(restartTop, 3000)
        stateBaseTop = false;
        stateBaseBtm = true;
        stateBaseLeft = true;
        stateBaseRight = true;
        // console.log("hitTop")
        }}
    if (stateBaseBtm) {
    if (detectHit(kitty,baseBtm)) {
        score += 30;
        antTimeBtm += 2000;
        speedB = 0;
        setTimeout(restartBtm, 3000)
        stateBaseTop = true;
        stateBaseBtm = false;
        stateBaseLeft = true;
        stateBaseRight = true;
        // console.log("hitBtm")
        }}
    if (stateBaseLeft) {
    if (detectHit(kitty,baseLeft)) {
        score += 30;
        antTimeLeft += 2000;
        speedL = 0;
        setTimeout(restartLeft, 3000)
        stateBaseTop = true;
        stateBaseBtm = true;
        stateBaseLeft = false;
        stateBaseRight = true;
        // console.log("hitLeft")
        }}
    if (stateBaseRight) {
    if (detectHit(kitty,baseRight)) {
        score += 30;
        antTimeRight += 2000;
        speedR = 0;
        setTimeout(restartRight, 3000)
        stateBaseTop = true;
        stateBaseBtm = true;
        stateBaseLeft = true;
        stateBaseRight = false;
        // console.log("hitRight")
        }}}          
           
    function restartTop () {
        antTimeTop = 1000;
        speedT = 1.3;
    }
    function restartBtm () {
        antTimeBtm = 1000;
        speedB = 1.3;
    }
    function restartLeft () {
        antTimeLeft = 1000;
        speedL = 1.3;
    }
    function restartRight () {
        antTimeRight = 1000;
        speedR = 1.3;
    }

    stateAntsT = true;
    stateAntsB  = true;
    stateAntsL  = true;
    stateAntsR  = true;    

    function hitAnts() {
        for(let i = 0; i < antsTop.length; i++) {
            if(stateAntsT && detectHit(kitty, antsTop[i])) {
                console.log("hit,hit")
                if(antsTop[i].desc === "red"){
                    endGame();
                } else {
                    speedT = 0.3;
                    antTimeTop = 3000;
                    setTimeout(restartTop, 3000)
                    stateAntsT = false;
                    stateAntsB  = true;
                    stateAntsL  = true;
                    stateAntsR  = true;}}}

        for(let i = 0; i < antsBtm.length; i++) {
            if(stateAntsB && detectHit(kitty, antsBtm[i])) {
                console.log("hit,hit")
                if(antsBtm[i].desc === "red"){
                    endGame();
                } else {
                    speedB = 0.3;
                    antTimeBtm = 3000;
                    setTimeout(restartBtm, 3000)
                    stateAntsT = true;
                    stateAntsB  = false;
                    stateAntsL  = true;
                    stateAntsR  = true;}}}

        for(let i = 0; i < antsLeft.length; i++) {
            if(stateAntsL && detectHit(kitty, antsLeft[i])) {
                console.log("hit,hit")
                if(antsLeft[i].desc === "red"){
                    endGame();
                } else {
                    speedL = 0.3;
                    antTimeLeft = 3000;
                    setTimeout(restartLeft, 3000)
                    stateAntsT = true;
                    stateAntsB  = true;
                    stateAntsL  = false;
                    stateAntsR  = true;}}}

        for(let i = 0; i < antsRight.length; i++) {
            if(stateAntsR && detectHit(kitty, antsRight[i])) {
                console.log("hit,hit")
                if(antsRight[i].desc === "red"){
                    endGame();
                } else {
                    speedR = 0.3;
                    antTimeRight = 3000;
                    setTimeout(restartRight, 3000)
                    stateAntsT = true;
                    stateAntsB  = true;
                    stateAntsL  = true;
                    stateAntsR  = false;}}}     
                
                
    }
    



function endGame () {
    displayText.innerText = "Game Over 😿"
    bestScore.push(score)
    bestScoreCalc();
    clearInterval(gameArea.interval)
    clearInterval(gameArea.timerInterval)
    antLoopTop = false;
    antLoopBtm = false;
    antLoopLeft = false;
    antLoopRight = false;
}

