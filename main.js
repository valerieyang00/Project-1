// const for HTML elements

const startBtn = document.querySelector("#startBtn")
const resetBtn = document.querySelector("#reset")
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

let gameArea = {
canvas : document.querySelector("canvas"),
start : function () {
    this.canvas.width = 1000;
    this.canvas.height = 850;
    this.context = this.canvas.getContext("2d");
    canvas.setAttribute('height', getComputedStyle(canvas)['height']);
    canvas.setAttribute('width', getComputedStyle(canvas)['width']);
    this.interval = setInterval(updateGameArea, 60);
    const antsInterval = setInterval(function () {
        antsTop.push(new component(500, 10, 5, 5, "white"))
        antsBtm.push(new component(500, 840, 5, 5, "white"))
        antsLeft.push(new component(10, 425, 5, 5, "white"))
        antsRight.push(new component(990, 425, 5, 5, "white"))}, 1000)},
clear : function() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
}}

// let background;
let treasure;
let kitty;
let baseTop;
let baseBtm;
let baseLeft;
let baseRight;


function startGame () {
// background = new component(0, 0, 1000, 850, "./media/v882-kul-46.jpg", "background")
treasure = new component(350, 325, 300, 200, "yellow")
kitty = new component (200, 200, 80, 80, "orange" )
baseTop = new component(450, 10, 100, 10, "blue")
baseBtm = new component(450, 830, 100, 10, "blue")
baseLeft = new component(0, 375, 10, 100, "blue")
baseRight = new component(990, 375, 10, 100, "blue")
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
    this.image.onload = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)};
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
// background.newPos();
// background.render();
// treasure.newPos();
treasure.render();
// kitty.speedX = 0;
// kitty.speedY = 0;
// if (gameArea.key && gameArea.key == "arrowUp") {moveUp};
// if (gameArea.key && gameArea.key == "arrowDown") {moveDown};
// if (gameArea.key && gameArea.key == "arrowLeft") {moveLeft};
// if (gameArea.key && gameArea.key == "arrowRight") {moveRight};
// kitty.newPos();
kitty.render();

for(let i = 0; i < antsTop.length; i++) {
    antsTop[i].y += 1
    antsTop[i].render();
}
for(let i = 0; i < antsBtm.length; i++) {
    antsBtm[i].y -= 1
    antsBtm[i].render();
}
for(let i = 0; i < antsLeft.length; i++) {
    antsLeft[i].x += 1
    antsLeft[i].render();
}
for(let i = 0; i < antsRight.length; i++) {
    antsRight[i].x -= 1
    antsRight[i].render();
}
}



//event listeners

startBtn.addEventListener("click", startGame)

function movementHandler(e) {
    const speed = 50;
    if (kitty.alive === true) {
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
                // kitty.x = kitty.X
                // kitty.y = kitty.Y
                break
        }
    }   
}

document.addEventListener("keydown", movementHandler)


