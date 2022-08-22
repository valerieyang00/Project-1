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

// canvas.addEventListener("click", (e) => {
//     console.log(e.offsetX, e.offsetY)})


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

//ScoreTrackers
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
let antTimeTop = 1000;
let antTimeBtm = 1000;
let antTimeLeft = 1000;
let antTimeRight = 1000;
let antLoopTop = true;
let antLoopBtm = true;
let antLoopLeft = true;
let antLoopRight = true;
let inGame = true;

//function for red ants generator
function redPush(location) {
    switch(location) {
    case("top") :        
        antsTop.push(new component(500, 15, 35, 25, "./media/red ant Down.png", "image", true, "red"))
        setTimeout(randomTop, antTimeTop)
        break
    case("btm") :    
        antsBtm.push(new component(500, 835, 35, 25, "./media/red ant Up.png", "image", true, "red"))
        setTimeout(randomBtm, antTimeBtm)
        break
    case("left") :    
        antsLeft.push(new component(10, 425, 35, 25, "./media/red ant Right.png", "image", true, "red"))
        setTimeout(randomLeft, antTimeLeft)
        break
    case("right") :
        antsRight.push(new component(990, 425, 35, 25, "./media/red ant Left.png", "image", true, "red"))
        setTimeout(randomRight, antTimeRight)
        break
}}

//function for randomizing ants generator
let random1 = 0.1;
let random2 = 0.1;
let random3 = 0.1;
let random4 = 0.1;

let randomTop = () => {
    if (antLoopTop) {
    if (Math.random() < random1) {
        redPush("top")}   
        else {
        antsTop.push(new component(500, 15, 25, 10, "./media/brown ant Down.png", "image", true, "brown"))
        setTimeout(randomTop, antTimeTop)}}
    else if (inGame) {setTimeout(randomTop, antTimeTop)}     
    }

let randomBtm = () => {
    if (antLoopBtm) {
    if (Math.random() < random2) {
        redPush("btm")}
    else {
        antsBtm.push(new component(500, 835, 25, 10, "./media/brown ant Up.png", "image", true, "brown"))
        setTimeout(randomBtm, antTimeBtm)}}
    else if (inGame) {setTimeout(randomBtm, antTimeBtm)} 
    }

let randomLeft = () => {
    if (antLoopLeft) {
    if (Math.random() < random3) {
        redPush("left")}
    else {
        antsLeft.push(new component(10, 425, 10, 25, "./media/brown ant Right.png", "image", true, "brown"))
        setTimeout(randomLeft, antTimeLeft)}}
    else if (inGame) {setTimeout(randomLeft, antTimeLeft)}    
    }

let randomRight = () => {
    if (antLoopRight) {
    if (Math.random() < random4) {
        redPush("right")}
    else {
        antsRight.push(new component(990, 425, 10, 25, "./media/brown ant Left.png", "image", true, "brown"))
        setTimeout(randomRight, antTimeRight)}}
    else if (inGame) {setTimeout(randomRight, antTimeRight)} 
    }

//game area set up    
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
    inGame = true;
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


// setting up canvas for game start & Game loop
let treasure;
let kitty;
let baseTop;
let baseBtm;
let baseLeft;
let baseRight;


function startGame () {
treasure = new component(400, 320, 200, 180, "./media/pngegg.png", "image", true)
kitty = new component (200, 200, 130, 130, "./media/Cat 15.png", "image", true)
fish = new component(100, 100, 80, 50, "./media/fish.png", "image", false, "item")
trap = new component(900, 100, 100, 80, "./media/trap.png", "image", false, "item")
baseTop = new component(375, 10, 250, 30, "#24225C")
baseBtm = new component(375, 810, 250, 30, "#24225C")
baseLeft = new component(0, 300, 30, 250, "#24225C")
baseRight = new component(970, 300, 30, 250, "#24225C")
gameArea.start();

}

class component {
constructor (x, y, width, height, color, type, alive, desc) {
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;
this.type = type;
this.alive = alive;
this.desc = desc;
if (type == "image") {
    this.image = new Image();
    this.image.src = color;
}}  

    render () {
    const ctx = gameArea.context;
    if (this.type == "image") {
        if(this.alive) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)}
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
fish.render();
trap.render();
hitAntTreasure();
hitBases();
hitAnts();
itemFish();
itemTrap();
}


//Event Listeners for all buttons

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
    inGame = false;
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
    numH = 0;
    startBtn.disabled = false;
})

// Key events for game character
let numH = 0;
function movementHandler(e) {
    const speed = 50;
        switch (e.keyCode) {
            case(38):
                kitty.y -= speed;
                if (kitty.y < 0) {
                    kitty.y = 0
                }    
                if (detectHitKT(kitty, treasure)) {
                    kitty.y += speed;
                }        
                break
            case(40):
                kitty.y += speed;
                if (kitty.y + kitty.height > canvas.height) {
                    kitty.y = canvas.height - kitty.height
                }
                if (detectHitKT(kitty, treasure)) {
                    kitty.y -= speed;
                }  
                break
            case(37):
                kitty.x -= speed;
                if (kitty.x < 0) {
                    kitty.x = 0
                }
                if (detectHitKT(kitty, treasure)) {
                    kitty.x += speed;
                }  
                break
            case(39):
                kitty.x += speed;
                if (kitty.x + kitty.width > canvas.width) {
                    kitty.x = canvas.width - kitty.width
                }
                if (detectHitKT(kitty, treasure)) {
                    kitty.x -= speed;
                }  
                break
            case(72):
                numH++
                if (numH < 4) {
                kitty.x = 10;
                kitty.y = 10;
                score -= 10;
                antsTop = []
                antsBtm = []
                antsLeft = []
                antsRight = []
                displayText.innerText = "HISS HISS 😼"}
                else {displayText.innerText = "Ants aren't scared anymore! 🙀"}
                break
        }
    }   


document.addEventListener("keydown", movementHandler)

//detect collision
//basic function for all collisions
function detectHit(objOne, objTwo) {
    const left = objOne.x + objOne.width >= objTwo.x + 30
    const right = objOne.x <= objTwo.x + objTwo.width - 30
    const top = objOne.y + objOne.height >= objTwo.y + 30
    const bottom = objOne.y <= objTwo.y + objTwo.height - 30
    // console.log(top, left, right, bottom)
    if (left && right && top && bottom) {
        return true
    } else {
        return false
    }
}
//collision between kitty and treasure to adjust for empty pixels around treasure
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

//ants rendering function including detect hit between ants and treasure
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
 
// detect kitty and bases: <state> booleans to avoid multiple detection in one play        
 let stateBaseTop = true;
 let stateBaseBtm = true;
 let stateBaseLeft = true;
 let stateBaseRight = true;       

 function hitBases () {
    if (stateBaseTop) {
    if (detectHit(kitty,baseTop)) {
        antLoopTop = false;
        antsTop = []
        score += 30;
        setTimeout(restartTop, 3000)
        stateBaseTop = false;
        stateBaseBtm = true;
        stateBaseLeft = true;
        stateBaseRight = true;
        }}
    if (stateBaseBtm) {
    if (detectHit(kitty,baseBtm)) {
        antLoopBtm = false;
        antsBtm = []
        score += 30;
        setTimeout(restartBtm, 3000)
        stateBaseTop = true;
        stateBaseBtm = false;
        stateBaseLeft = true;
        stateBaseRight = true;
        }}
    if (stateBaseLeft) {
    if (detectHit(kitty,baseLeft)) {
        antLoopLeft = false;
        antsLeft = []
        score += 30;
        setTimeout(restartLeft, 3000)
        stateBaseTop = true;
        stateBaseBtm = true;
        stateBaseLeft = false;
        stateBaseRight = true;
        }}
    if (stateBaseRight) {
    if (detectHit(kitty,baseRight)) {
        antLoopRight = false;
        antsRight = []
        score += 30;
        setTimeout(restartRight, 3000)
        stateBaseTop = true;
        stateBaseBtm = true;
        stateBaseLeft = true;
        stateBaseRight = false;
        }}}          
           

    //functions to reset to normal speed/loops after each collision activity    
    function restartTop () {
        antLoopTop = true;
        antTimeTop = 1000;
        speedT = 1.3;
    }
    function restartBtm () {
        antLoopBtm = true;
        antTimeBtm = 1000;
        speedB = 1.3;
    }
    function restartLeft () {
        antLoopLeft = true;
        antTimeLeft = 1000;
        speedL = 1.3;
    }
    function restartRight () {
        antLoopRight = true;
        antTimeRight = 1000;
        speedR = 1.3;
    }


// detect kitty to ants (brown ants -- slow down speed to 0.1, red ants -- game over)    
    function hitAnts() {
        for(let i = 0; i < antsTop.length; i++) {
            if(stateAntsT && detectHit(kitty, antsTop[i])) {
                if(antsTop[i].desc === "red"){
                    endGame();
                } else {
                    speedT = 0.1;
                    antTimeTop = 3000;
                    setTimeout(restartTop, 3000)
                }}}

        for(let i = 0; i < antsBtm.length; i++) {
            if(stateAntsB && detectHit(kitty, antsBtm[i])) {
                if(antsBtm[i].desc === "red"){
                    endGame();
                } else {
                    speedB = 0.1;
                    antTimeBtm = 3000;
                    setTimeout(restartBtm, 3000)
                }}}

        for(let i = 0; i < antsLeft.length; i++) {
            if(stateAntsL && detectHit(kitty, antsLeft[i])) {
                if(antsLeft[i].desc === "red"){
                    endGame();
                } else {
                    speedL = 0.1;
                    antTimeLeft = 3000;
                    setTimeout(restartLeft, 3000)
                }}}

        for(let i = 0; i < antsRight.length; i++) {
            if(stateAntsR && detectHit(kitty, antsRight[i])) {
                if(antsRight[i].desc === "red"){
                    endGame();
                } else {
                    speedR = 0.1;
                    antTimeRight = 3000;
                    setTimeout(restartRight, 3000)
                }}}     
                
                
    }

    // set up items (fish/trap) to random axis at certain times
let xArrFish = [759, 366, 265, 698, 220, 643, 835, 64]
let yArrFish = [788, 217, 732, 32, 210, 230, 618, 625]
let randomPos = Math.round(Math.random() * 7)
let stateFish;
let stateTrap;

function itemFish () {
    let index = randomPos
    if (sec === 5 || sec === 15 || sec === 38 || sec === 51) {
        fish.x = xArrFish[index]
        fish.y = yArrFish[index]
        fish.alive = true;
        stateFish = true;
        setTimeout(() => {
            fish.alive = false
            stateFish = false}, 4000)
        }
    if (stateFish) {    
        if (detectHit(kitty, fish)) {
        stateFish = false;    
        fish.alive = false;
        score += 50;
        speedB = 0;
        speedL = 0;
        speedR = 0;
        speedT = 0;
        setTimeout(() => {
            speedB = 1.5;
            speedL = 1.5;
            speedR = 1.5;
            speedT = 1.5;
        }, 3000)
    }    
}}

let xArrTrap = [717, 864, 232, 700, 69, 827, 360, 129]
let yArrTrap = [674, 241, 112, 519, 91, 170, 603, 528]

function itemTrap () {
    let index = randomPos
    if (sec === 10 || sec === 25 || sec === 31 || sec === 55) {
        trap.x = xArrTrap[index]
        trap.y = yArrTrap[index]
        trap.alive = true;
        stateTrap = true;
        setTimeout(() => {
            trap.alive = false
            stateTrap = false}, 4000)
        }
    if (stateTrap) {    
        if (detectHit(kitty, trap)) {
        stateTrap = false;    
        trap.alive = false;
        endGame();
    }    
}}

// game over before reset button
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
    inGame = false;
}

