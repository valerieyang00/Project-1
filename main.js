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
const radioBtns = document.querySelectorAll('input[name="mode"]')
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
        textWin(); 
        endGame();
    } else {
        displayTime.innerText = `Time : 00 : ${sec}`
        if (sec === 10 || sec === 20 || sec === 30 || sec === 40 || sec === 50) {
            score += 20;}}}

//ScoreTrackers
function scoreTracker () {
    displayScore.innerText = `Score : ${score}`;}

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
    displayNo3.innerText = `3. ${bestScore[2]}`}}


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

let antLoopAllT = () => {
    antLoopTop = true;
    antLoopBtm = true;
    antLoopLeft = true;
    antLoopRight = true;}

let antLoopAllF = () => {
    antLoopTop = false;
    antLoopBtm = false;
    antLoopLeft = false;
    antLoopRight = false;}

//function for randomizing ants generator
let randomRatio;
let randomTop = () => {
    if (antLoopTop) {
    if (Math.random() < randomRatio) {
        redPush("top")}   
        else {
        antsTop.push(new component(410, 20, 22, 15, "./media/brown ant Down.png", "image", true, "brown"))
        setTimeout(randomTop, antTimeTop)}}
    else if (inGame) {setTimeout(randomTop, antTimeTop)}}

let randomBtm = () => {
    if (antLoopBtm) {
    if (Math.random() < randomRatio) {
        redPush("btm")}
    else {
        antsBtm.push(new component(410, 650, 22, 15, "./media/brown ant Up.png", "image", true, "brown"))
        setTimeout(randomBtm, antTimeBtm)}}
    else if (inGame) {setTimeout(randomBtm, antTimeBtm)}}

let randomLeft = () => {
    if (antLoopLeft) {
    if (Math.random() < randomRatio) {
        redPush("left")}
    else {
        antsLeft.push(new component(20, 330, 15, 22, "./media/brown ant Right.png", "image", true, "brown"))
        setTimeout(randomLeft, antTimeLeft)}}
    else if (inGame) {setTimeout(randomLeft, antTimeLeft)}}

let randomRight = () => {
    if (antLoopRight) {
    if (Math.random() < randomRatio) {
        redPush("right")}
    else {
        antsRight.push(new component(810, 330, 15, 22, "./media/brown ant Left.png", "image", true, "brown"))
        setTimeout(randomRight, antTimeRight)}}
    else if (inGame) {setTimeout(randomRight, antTimeRight)}}

//function for red ants generator
function redPush(location) {
    switch(location) {
    case("top") :        
        antsTop.push(new component(410, 20, 28, 18, "./media/red ant Down.png", "image", true, "red"))
        setTimeout(randomTop, antTimeTop)
        break
    case("btm") :    
        antsBtm.push(new component(410, 650, 28, 18, "./media/red ant Up.png", "image", true, "red"))
        setTimeout(randomBtm, antTimeBtm)
        break
    case("left") :    
        antsLeft.push(new component(20, 330, 28, 18, "./media/red ant Right.png", "image", true, "red"))
        setTimeout(randomLeft, antTimeLeft)
        break
    case("right") :
        antsRight.push(new component(810, 330, 28, 18, "./media/red ant Left.png", "image", true, "red"))
        setTimeout(randomRight, antTimeRight)
        break}}    

//game area set up    
let gameArea = {
canvas : document.querySelector("canvas"),
start : function () {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    canvas.setAttribute('height', getComputedStyle(canvas)['height']);
    canvas.setAttribute('width', getComputedStyle(canvas)['width']);
    this.interval = setInterval(updateGameArea, 60);
    antLoopAllT();
    inGame = true;
    redBlocks = []
    this.topInterval = setTimeout(randomTop, antTimeTop)
    this.btmInterval = setTimeout(randomBtm, antTimeBtm)
    this.leftInterval = setTimeout(randomLeft, antTimeLeft)
    this.rightInterval = setTimeout(randomRight, antTimeRight)
    this.timerInterval = setInterval(countSeconds, 1000)},
clear : function() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);}}

// setting up canvas for game start
function startGame () {
treasure = new component(345, 285, 140, 100, "./media/treasure.png", "image", true)
kitty = new component (150, 150, 100, 100, "./media/Cat 15.png", "image", true)
fish = new component(100, 100, 70, 50, "./media/fish.png", "image", false, "item")
trap = new component(900, 100, 80, 60, "./media/trap.png", "image", false, "item")
baseTop = new component(325, 0, 180, 20, "#666868", "base", true)
baseBtm = new component(325, 650, 180, 20, "#666868", "base", true)
baseLeft = new component(0, 245, 20, 180, "#666868", "base", true)
baseRight = new component(810, 245, 20, 180, "#666868", "base", true)
modeCheck();
speedVar();
gameArea.start();}

//variable set up by difficulty mode
let inGame = true;
let gameMode;
let regSpeed;
let slowSpeed = 0.1;

function modeCheck() {
for (radiobtn of radioBtns) {
    if (radiobtn.checked) {
        gameMode = radiobtn.value;}}
    if (gameMode === "easy") {
        randomRatio = 0.1;
        regSpeed = 1.2;} 
    else if (gameMode === "medium") {
        randomRatio = 0.2;
        regSpeed = 1.5;
        trap.width = 100;
        trap.height = 70;}
    else if (gameMode === "hard") {
        randomRatio = 0.3;
        regSpeed = 1.8;
        trap.width = 100;
        trap.height = 70;}} 

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
    this.image.src = color;}}  

    render () {
    const ctx = gameArea.context;
    if (this.type == "image") {
        if(this.alive) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)}
    } else {
        if(this.alive) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)}}}}

//Game Loop
function updateGameArea() {
gameArea.clear();
baseTop.render();
baseBtm.render();
baseLeft.render();
baseRight.render();
treasure.render();
kitty.render();
scoreTracker();
fish.render();
trap.render();
hitAntTreasure();
hitBases();
hitAnts();
itemFish();
itemTrap();
hitRedBlocks();}


// Key events for game character
let numH = 0;
let keys = true;
function movementHandler(e) {
    if (keys = true) {
    const speed = 45;
        switch (e.keyCode) {
            case(38):
                kitty.y -= speed;
                if (kitty.y < 0) {
                    kitty.y = 0}    
                if (detectHitKT(kitty, treasure)) {
                    kitty.y += speed;}        
                break
            case(40):
                kitty.y += speed;
                if (kitty.y + kitty.height > canvas.height) {
                    kitty.y = canvas.height - kitty.height}
                if (detectHitKT(kitty, treasure)) {
                    kitty.y -= speed;}  
                break
            case(37):
                kitty.x -= speed;
                if (kitty.x < 0) {
                    kitty.x = 0}
                if (detectHitKT(kitty, treasure)) {
                    kitty.x += speed;}  
                break
            case(39):
                kitty.x += speed;
                if (kitty.x + kitty.width > canvas.width) {
                    kitty.x = canvas.width - kitty.width}
                if (detectHitKT(kitty, treasure)) {
                    kitty.x -= speed;}  
                break
            case(72):
                if (gameMode === "easy") {
                numH++
                if (numH < 3) {
                kitty.x = 10;
                kitty.y = 10;
                score -= 20;
                antsTop = []
                antsBtm = []
                antsLeft = []
                antsRight = []
                textHiss();}
                else {textNoHiss()}
                break} else {noHissAllowed()}}}}   


//detect collision
//basic function for all collisions
function detectHit(objOne, objTwo) {
    const left = objOne.x + objOne.width >= objTwo.x + 20
    const right = objOne.x <= objTwo.x + objTwo.width - 20
    const top = objOne.y + objOne.height >= objTwo.y + 20
    const bottom = objOne.y <= objTwo.y + objTwo.height - 20
    // console.log(top, left, right, bottom)
    if (left && right && top && bottom) {
        return true
    } else {
        return false
    }}

//collision between kitty and treasure to adjust for empty pixels around treasure
function detectHitKT(objOne, objTwo) {
    const left = objOne.x + objOne.width >= objTwo.x + 40
    const right = objOne.x <= objTwo.x + objTwo.width - 40
    const top = objOne.y + objOne.height >= objTwo.y + 40
    const bottom = objOne.y <= objTwo.y + objTwo.height - 40
    // console.log(top, left, right, bottom)
    if (left && right && top && bottom) {
        return true
    } else {
        return false
    }}

//ants rendering function including detect hit between ants and treasure
let speedT;
let speedB;
let speedL;
let speedR;
let speedVar = () => {
    speedT = regSpeed
    speedB = regSpeed
    speedL = regSpeed
    speedR = regSpeed}

function hitAntTreasure () {
    for(let i = 0; i < antsTop.length; i++) {
        antsTop[i].y += speedT
        antsTop[i].render();
        if(detectHit(antsTop[i], treasure)) {
            textAntsWin();
            endGame();}}
    for(let i = 0; i < antsBtm.length; i++) {
        antsBtm[i].y -= speedB
        antsBtm[i].render();
        if(detectHit(antsBtm[i], treasure)) {
            textAntsWin();
            endGame();}}
    for(let i = 0; i < antsLeft.length; i++) {
        antsLeft[i].x += speedL
        antsLeft[i].render();
        if(detectHit(antsLeft[i], treasure)) {
            textAntsWin();
            endGame();}}
    for(let i = 0; i < antsRight.length; i++) {
        antsRight[i].x -= speedR
        antsRight[i].render();
        if(detectHit(antsRight[i], treasure)) {
            textAntsWin();
            endGame();}}}
 
// detect kitty and bases: <state> booleans to avoid multiple detection in one play        
 let stateBaseTop = true;
 let stateBaseBtm = true;
 let stateBaseLeft = true;
 let stateBaseRight = true; 
 let allBasesT = () => {
     stateBaseTop = true;
     stateBaseBtm = true;
     stateBaseLeft = true;
     stateBaseRight = true;}   

 function hitBases () {
    if (stateBaseTop) {
    if (detectHit(kitty,baseTop)) {
        baseTop.color = "lightgreen";
        setTimeout(() => {baseTop.color = "#666868"}, 600)
        antLoopTop = false;
        antsTop = []
        score += 30;
        setTimeout(restartTop, 3000)
        stateBaseTop = false;
        stateBaseBtm = true;
        stateBaseLeft = true;
        stateBaseRight = true;
        textBaseHit();
        }}
    if (stateBaseBtm) {
    if (detectHit(kitty,baseBtm)) {
        baseBtm.color = "lightgreen";
        setTimeout(() => {baseBtm.color = "#666868"}, 600)
        antLoopBtm = false;
        antsBtm = []
        score += 30;
        setTimeout(restartBtm, 3000)
        stateBaseTop = true;
        stateBaseBtm = false;
        stateBaseLeft = true;
        stateBaseRight = true;
        textBaseHit();
        }}
    if (stateBaseLeft) {
    if (detectHit(kitty,baseLeft)) {
        baseLeft.color = "lightgreen";
        setTimeout(() => {baseLeft.color = "#666868"}, 600)
        antLoopLeft = false;
        antsLeft = []
        score += 30;
        setTimeout(restartLeft, 3000)
        stateBaseTop = true;
        stateBaseBtm = true;
        stateBaseLeft = false;
        stateBaseRight = true;
        textBaseHit();
        }}
    if (stateBaseRight) {
    if (detectHit(kitty,baseRight)) {
        baseRight.color = "lightgreen";
        setTimeout(() => {baseRight.color = "#666868"}, 600)
        antLoopRight = false;
        antsRight = []
        score += 30;
        setTimeout(restartRight, 3000)
        stateBaseTop = true;
        stateBaseBtm = true;
        stateBaseLeft = true;
        stateBaseRight = false;
        textBaseHit();}}}      
           
    //functions to reset to normal speed/loops after each collision activity    
    function restartTop () {
        antLoopTop = true;
        antTimeTop = 1000;
        speedT = regSpeed;}
    function restartBtm () {
        antLoopBtm = true;
        antTimeBtm = 1000;
        speedB = regSpeed;}
    function restartLeft () {
        antLoopLeft = true;
        antTimeLeft = 1000;
        speedL = regSpeed;}
    function restartRight () {
        antLoopRight = true;
        antTimeRight = 1000;
        speedR = regSpeed;}


// detect kitty to ants (brown ants -- slow down speed to 0.2, red ants -- game over)    
    function hitAnts() {
        for(let i = 0; i < antsTop.length; i++) {
            if(detectHit(kitty, antsTop[i])) {
                if(antsTop[i].desc === "red"){
                    textRedAnts();
                    endGame();
                } else {
                    speedT = slowSpeed;
                    // console.log(slowSpeed)
                    antTimeTop = 3000;
                    setTimeout(restartTop, 3000)}}}

        for(let i = 0; i < antsBtm.length; i++) {
            if(detectHit(kitty, antsBtm[i])) {
                if(antsBtm[i].desc === "red"){
                    textRedAnts();
                    endGame();
                } else {
                    speedB = slowSpeed;
                    antTimeBtm = 3000;
                    setTimeout(restartBtm, 3000)}}}

        for(let i = 0; i < antsLeft.length; i++) {
            if(detectHit(kitty, antsLeft[i])) {
                if(antsLeft[i].desc === "red"){
                    textRedAnts();
                    endGame();
                } else {
                    speedL = slowSpeed;
                    antTimeLeft = 3000;
                    setTimeout(restartLeft, 3000)}}}

        for(let i = 0; i < antsRight.length; i++) {
            if(detectHit(kitty, antsRight[i])) {
                if(antsRight[i].desc === "red"){
                    textRedAnts();
                    endGame();
                } else {
                    speedR = slowSpeed;
                    antTimeRight = 3000;
                    setTimeout(restartRight, 3000)}}}  
                }

    // set up items (fish/trap) to random axis at certain times
let xArrFish = [533,650,700,505,304,297,104,189,74,313,532,542,244]
let yArrFish = [235,114,454,566,411,118,117,442,555,459,132,154,228]
let randomPos = Math.round(Math.random() * (xArrFish.length - 1))
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
            stateFish = false}, 4000)}
    if (stateFish) {    
        if (detectHit(kitty, fish)) {
        antLoopAllF();
        stateFish = false;    
        fish.alive = false;
        score += 50;
        speedB = 0;
        speedL = 0;
        speedR = 0;
        speedT = 0;
        textFish();
        setTimeout(() => {
            antLoopAllT();
            speedB = regSpeed;
            speedL = regSpeed;
            speedR = regSpeed;
            speedT = regSpeed;}, 2000)}}}

let xArrTrap = [103,734,748,258,636,243,645,236,211,694,487,321,315]
let yArrTrap = [90,496,137,451,474,182,172,95,591,531,438,431,156]

function itemTrap () {
    let index = randomPos;
    if (sec === 10 || sec === 25 || sec === 31 || sec === 55) {
        trap.x = xArrTrap[index]
        trap.y = yArrTrap[index]
        trap.alive = true;
        stateTrap = true;
        setTimeout(() => {
            trap.alive = false
            stateTrap = false}, 4000)}
    if (stateTrap) {    
        if (detectHit(kitty, trap)) {
        stateTrap = false;    
        trap.alive = false;
        textTrap();
        endGame();}}}

// random red blocks
let stateRedBlocks = true;   
let redBlocks = []
let indexRed = Math.round(Math.random() * 4)
function randomBlocks() {
    switch(true) {
    case(indexRed <= 1) :        
        redBlocks.push(new component(540, 0, 280, 20, "red", "base", true, "item"))
        redBlocks.push(new component(20, 0, 280, 20, "red", "base", true, "item"))
         break
    case(indexRed <= 2 && indexRed > 1) :    
        redBlocks.push(new component(540, 650, 280, 20, "red", "base", true, "item"))
        redBlocks.push(new component(20, 650, 280, 20, "red", "base", true, "item"))
         break
    case(indexRed <= 3 && indexRed > 2) :    
        redBlocks.push(new component(0, 20, 20, 200, "red", "base", true, "item"))
        redBlocks.push(new component(0, 450, 20, 200, "red", "base", true, "item"))
         break
    case(indexRed <= 3 && indexRed > 3) :
        redBlocks.push(new component(810, 20, 20, 200, "red", "base", true, "item"))
        redBlocks.push(new component(810, 450, 20, 200, "red", "base", true, "item"))     
         break}}

function hitRedBlocks () {
    if (sec === 3 || sec === 11 || sec === 23 || sec === 31 || sec === 38 || sec === 46 || sec === 50) {
    randomBlocks();}
    for (i = 0; i < redBlocks.length; i++) {        
        redBlocks[i].render();
        setTimeout(() => {redBlocks = []}, 10000)
        if (stateRedBlocks && detectHit(kitty, redBlocks[i])) {
            stateRedBlocks = false;
            score -= 30;
            textRedBlocks();
            setTimeout(() => {stateRedBlocks = true}, 2000)}}}   

// game over before reset button
function endGame () {
    bestScore.push(score)
    bestScoreCalc();
    clearInterval(gameArea.interval)
    clearInterval(gameArea.timerInterval)
    antLoopAllF();
    allBasesT();
    keys = false;}

//Event Listeners for all buttons
document.addEventListener("keydown", movementHandler)

startBtn.addEventListener("click", () => {
    textIns.style.display= "none"
    canvas.style.display = ""
    keys = true;
    startBtn.disabled = true;
    textStart();
    startGame();})

insBtn.addEventListener("click", () => {
    textIns.style.display = "block"
    canvas.style.display = "none"})

hideIns.addEventListener("click", () => {
    textIns.style.display= "none"
    canvas.style.display = ""})

resetBtn.addEventListener("click", () => {
    antLoopAllF();
    allBasesT();
    inGame = false;
    clearInterval(gameArea.interval)
    clearInterval(gameArea.timerInterval)
    gameArea.clear();
    antsTop = []
    antsBtm = []
    antsLeft = []
    antsRight = []
    regSpeed;
    randomRatio;
    speedT;
    speedB;
    speedL;
    speedR;
    constructor = null
    score = 0;
    sec = 0;
    min = 0;
    numH = 0;
    startBtn.disabled = false;
    scoreTracker();
    displayTime.innerText = `Time: 00 : 00`
    textClear();
    keys = false;})

// text area for messages

let textBaseHit = () => {
    textClear();
    displayText.innerText = "Base Attack! +30"
    displayText.style.color = "green"
    displayText.style.backgroundColor = "lightgreen"
    setTimeout(textClear, 2000)}

let textAntsWin = () => {
    textClear();
    displayText.innerText = "Game Over 😿 Try Again!"
    displayText.style.color = "#F5B7B1"
    displayText.style.backgroundColor = "#CB4335"}

let textRedAnts = () => {
    textClear();
    displayText.innerText = "Red Ants are Poisonous! Game Over 😿 "
    displayText.style.color = "#F5B7B1"
    displayText.style.backgroundColor = "#CB4335"}

let textFish = () => {
    textClear();
    displayText.innerText = "Kitty is Full!😺 +50"
    displayText.style.color = "#AED6F1"
    displayText.style.backgroundColor = "#2E86C1"
    setTimeout(textClear, 3000)}

let textTrap = () => {
    textClear();
    displayText.innerText = "Kitty is trapped! Game Over 😿 "
    displayText.style.color = "#F5B7B1"
    displayText.style.backgroundColor = "#CB4335"}

let textRedBlocks = () => {
    textClear();
    displayText.innerText = "Red Block Alert -30 "
    displayText.style.color = "#CB4335"
    setTimeout(textClear, 3000)}

let textStart = () => {
    textClear();
    displayText.innerText = "Start! Good Luck Kitty 🍀"
    displayText.style.color = "#16A085"
    setTimeout(textClear, 3000)}

let textWin = () => {
    textClear();
    displayText.innerText = "Kitty saves the day! +100 🎉 "
    displayText.style.color = "#D1F2EB"
    displayText.style.backgroundColor = "#16A085"}

let textHiss = () => {
    textClear();
    displayText.innerText = "Hiss Hiss 😼"
    displayText.style.color = "#F7DC6F"
    setTimeout(textClear, 3000)}

let textNoHiss = () => {
    textClear();
    displayText.innerText = "Ants are not scared anymore 🙀"
    displayText.style.color = "#EC7063"
    setTimeout(textClear, 3000)}

let textClear = () => {
    displayText.innerText = ""
    displayText.style.color = "#D2B4DE"
    displayText.style.backgroundColor = "black"}

let noHissAllowed = () => {
    textClear();
    displayText.innerText = "Hissing is not allowed in this mode 😿"
    displayText.style.color = "#EC7063"
    setTimeout(textClear, 3000)}


