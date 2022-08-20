// const for HTML elements

const startBtn = document.querySelector("#startBtn")
const canvas = document.querySelector("canvas")

//context for canvas
const ctx = canvas.getContext("2d")
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

//images for canvas and game pieces
const background = new Image()
const treasureImage = new Image()
const kittyImage = new Image()
background.src = "./media/v882-kul-46.jpg"
treasureImage.src = "./media/My project-1 (1).png"
kittyImage.src = "./media/cat.png"

background.onload = () => {
    ctx.drawImage(background, 0, 0, 1000, 850)
}
treasureImage.onload = () => {
    ctx.drawImage(treasureImage, 330, 305, 340, 240)
}

//functions to render and move kitty around

class Crawler {
    constructor(x, y, width, height, image) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = image
    }
    draw(ctx) {
        this.image.onload = () => {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}}

const kitty = new Crawler(200,200,100,100,kittyImage)
console.log(Crawler)

function movementHandler(e) {
    const speed = 10 // how many pixels kitty moves
            switch (e.key) {
            case('arrowUp'):
                // move the hero up
                kitty.y -= speed
                if (kitty.y < 0) {
                    kitty.y = 0
                }
                break
            case('arrowDown'):
                // move the kitty down
                kitty.y += speed
                if (kitty.y + kitty.height > canvas.height) {
                    kitty.y = canvas.height - kitty.height
                }
                break
            case('arrowLeft'):
                // move the kitty left
                kitty.x -= speed
                if (kitty.x < 0) {
                    kitty.x = 0
                }
                break
            case('arrowRight'):
                // move the kitty right
                kitty.x += speed
                if (kitty.x + kitty.width > canvas.width) {
                    kitty.x = canvas.width - kitty.width
                }
                break
            case('b'):
                console.log("cat hisses, ants slow down")
                break
        }
    }   

document.addEventListener("keydown", movementHandler)



// ant bases set up
class staticObj {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const baseTop = new staticObj(450, 99, 100, 10, "blue")
const baseBtm = new staticObj(450, 744, 100, 10, "blue")
const baseLeft = new staticObj(114, 375, 10, 100, "blue")
const baseRight = new staticObj(881, 375, 10, 100, "blue")


//game loops 
const gameLoopInterval = setInterval(gameLoop, 60)
function gameLoop() {
    baseTop.render();
    baseBtm.render();
    baseLeft.render();
    baseRight.render();
   


   
}

canvas.addEventListener("click", (e) => {
    console.log(e.offsetX, e.offsetY)
})

