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
let gameArea = {
    canvas : document.querySelector("canvas"),
    start : function () {
        this.canvas.width = 1000;
        this.canvas.height = 850;
        this.context = this.canvas.getContext("2d");
        canvas.setAttribute('height', getComputedStyle(canvas)['height']);
        canvas.setAttribute('width', getComputedStyle(canvas)['width']);
        this.interval = setInterval(updateGameArea, 60);
    },
    clear : function() {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}

let background;
let treasure;
let kitty;
let baseTop;
let baseBtm;
let baseLeft;
let baseRight;

function startGame () {
    background = new component(0, 0, 1000, 850, "./media/v882-kul-46.jpg", "image")
    treasure = new component(330, 305, 340, 240, "./media/My project-1 (1).png", "image")
    kitty = new component (200, 200, 100, 100, "./media/cat.png", "image" )
    baseTop = new component(450, 99, 100, 10, "blue")
    baseBtm = new component(450, 744, 100, 10, "blue")
    baseLeft = new component(114, 375, 10, 100, "blue")
    baseRight = new component(881, 375, 10, 100, "blue")
    gameArea.start();

}

class component {
    constructor (x, y, width, height, color, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.color = color;
    this.render = () => {
        const ctx = gameArea.context;
        if (this.type == "image") {
        window.onload = () => {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)};
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)}
            }
    this.newPos = () => {
        this.x += this.speedX;
        this.y += this.speedY;
    }}}

function updateGameArea() {
    gameArea.clear();
    baseTop.render();
    baseBtm.render();
    baseLeft.render();
    baseRight.render();
    background.render();
    treasure.render();
    kitty.newPos();
    kitty.render();
}

function moveUp() {
    kitty.speedY -= 10;
}

function moveDown() {
    kitty.speedY += 10;
}

function moveLeft() {
    kitty.speedX -= 10;
}

function moveRight() {
    kitty.speedX += 10;
}

function stopMove() {
    kitty.speedX = 0;
    kitty.speedY = 0;
}

//event listeners

startBtn.addEventListener("click", startGame)