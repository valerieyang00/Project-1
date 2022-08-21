// const for HTML elements

const startBtn = document.querySelector("#startBtn")
const resetBtn = document.querySelector("#resetBtn")
const displayText = document.querySelector(".aside-btm-left")
// const canvas = document.querySelector("canvas")

//context for canvas
// const ctx = canvas.getContext("2d")
// canvas.setAttribute('height', getComputedStyle(canvas)['height'])
// canvas.setAttribute('width', getComputedStyle(canvas)['width'])
// canvas.addEventListener("click", (e) => {
//     console.log(e.offsetX, e.offsetY)
// })

// const background = new Image()
// background.src = "./media/v882-kul-46.jpg"
// background.onload = () => {
//     ctx.drawImage(background, 0, 0, 1000, 850)
//     }
let antsTop = []
let antsBtm = []
let antsLeft = []
let antsRight = []
let antsInterval = null;
let antTimeTop= 1000;
let antTimeBtm= 1000;
let antTimeLeft= 1000;
let antTimeRight= 1000;

// let topInterval = setInterval(function () {
//     antsTop.push(new component(500, 15, 5, 5, "white"))
//     }, antTimeTop);
// let btmInterval = setInterval(function () {
//     antsBtm.push(new component(500, 835, 5, 5, "white"))
//     }, antTimeBtm);
// let leftInterval = setInterval(function () {
//     antsLeft.push(new component(10, 425, 5, 5, "white"))
//     }, antTimeLeft);
// let rightInterval = setInterval(function () {
//     antsRight.push(new component(990, 425, 5, 5, "white"))
//     }, antTimeRight)

let gameArea = {
canvas : document.querySelector("canvas"),

start : function () {
    this.canvas.width = 1000;
    this.canvas.height = 850;
    this.context = this.canvas.getContext("2d");
    canvas.setAttribute('height', getComputedStyle(canvas)['height']);
    canvas.setAttribute('width', getComputedStyle(canvas)['width']);
    this.interval = setInterval(updateGameArea, 60);
    this.topInterval = setInterval(function () {
        antsTop.push(new component(500, 15, 5, 5, "white"))
        }, antTimeTop);
    this.btmInterval = setInterval(function () {
        antsBtm.push(new component(500, 835, 5, 5, "white"))
        }, antTimeBtm);
    this.leftInterval = setInterval(function () {
        antsLeft.push(new component(10, 425, 5, 5, "white"))
        }, antTimeLeft);
    this.rightInterval = setInterval(function () {
        antsRight.push(new component(990, 425, 5, 5, "white"))
        }, antTimeRight)},

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
    antsTop[i].y += 1
    antsTop[i].render();
    if(detectHit(antsTop[i], treasure)) {
        endGame();
    }
}
for(let i = 0; i < antsBtm.length; i++) {
    antsBtm[i].y -= 1
    antsBtm[i].render();
    if(detectHit(antsBtm[i], treasure)) {
        endGame();
    }
}
for(let i = 0; i < antsLeft.length; i++) {
    antsLeft[i].x += 1
    antsLeft[i].render();
    if(detectHit(antsLeft[i], treasure)) {
        endGame();
    }
}
for(let i = 0; i < antsRight.length; i++) {
    antsRight[i].x -= 1
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

startBtn.addEventListener("click", startGame)
resetBtn.addEventListener("click", () => {
    endGame();
    gameArea.clear();
    antsTop = []
    antsBtm = []
    antsLeft = []
    antsRight = []
    clearInterval(gameArea.interval);
    clearInterval(gameArea.topInterval);
    clearInterval(gameArea.btmInterval);
    clearInterval(gameArea.leftInterval);
    clearInterval(gameArea.rightInterval);
    constructor = null})

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
                break
            case(40):
                // move the kitty down
                kitty.y += speed;
                // kitty.y = kitty.Y
                if (kitty.y + kitty.height > canvas.height) {
                    kitty.y = canvas.height - kitty.height
                }
                break
            case(37):
                // move the kitty left
                kitty.x -= speed;
                // kitty.x = kitty.X
                if (kitty.x < 0) {
                    kitty.x = 0
                }
                break
            case(39):
                // move the kitty right
                kitty.x += speed;
                // kitty.x = kitty.X
                if (kitty.x + kitty.width > canvas.width) {
                    kitty.x = canvas.width - kitty.width
                }
                break
            case(72):
                kitty.x = 200;
                kitty.y = 200;

                break
        }
    }   


document.addEventListener("keydown", movementHandler)

//detect collision

function detectHit(objOne, objTwo) {
    const left = objOne.x + objOne.width >= objTwo.x
    const right = objOne.x <= objTwo.x + objTwo.width - 10
    const top = objOne.y + objOne.height >= objTwo.y + 10
    const bottom = objOne.y <= objTwo.y + objTwo.height - 10
    // console.log(top, left, right, bottom)
    if (left && right && top && bottom) {
        return true
    } else {
        return false
    }
}

function endGame () {
    displayText.innerText = "Game Over"
    clearInterval(gameArea.interval)
}

