const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Paddle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = 10;
        // change this to be half way down the canvas
        this.y = (canvas.height/2)-(this.height/2);
        this.draw();
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);

    }

    clear() {
        ctx.clearRect(this.x,this.y,this.width,this.height);
    }

    move(yOffset) {
        const wallOffset = 30;
        this.clear();
        this.y += yOffset;
        if (this.y > (canvas.height-this.height)-wallOffset) {
            this.y = (canvas.height-this.height)-wallOffset;
        }
        else if (this.y < wallOffset) {
            this.y = wallOffset;
        }
        this.draw();
    }
}


class Ball {
    constructor(radius, color, furry=false) {
        this.radius = radius;
        this.color = color;
        // inser image of furry ball instead of drawing a circle
        this.furry = furry;

        // change these values to begin at the center of the canvas
        this.x = canvas.width / 2 - this.radius;
        this.y = canvas.height / 2 - this.radius;

        this.xSlope = 4;
        this.ySlope = 3;

        // update 60 frames per second
        this.velocity = 1;

        this.draw()
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x+this.radius, this.y+this.radius, this.radius, 0, 360);
        ctx.fill()

    }

    clear() {
        ctx.clearRect(this.x, this.y, this.radius * 2, this.radius * 2)
    }

    move() {
        this.clear()
        // dont overstep boundaries
        this.x += this.xSlope
        this.y += this.ySlope

        // left wall
        if (this.x < 0) {
            this.x = -this.x
            this.xSlope = -this.xSlope
        }
        // right wall
        if (this.x > canvas.width - (this.radius * 2)) {
            this.x = 2 * canvas.width - (4 * this.radius) - this.x
            this.xSlope = -this.xSlope
        }
        // top wall
        if (this.y < 0) {
            this.y = -this.y
            this.ySlope = -this.ySlope
        }
        // bottom wall
        if (this.y > canvas.height - (this.radius * 2)) {
            this.y = 2 * canvas.height - (4 * this.radius) - this.y
            this.ySlope = -this.ySlope
        }

        this.draw()
    }
}


const paddle = new Paddle(30,100,'blue');
const ball = new Ball(20, 'orange')


// paddle movement using Q and A
document.onkeypress = (e) => {
    console.log(e.code)
    if (e.code == 'KeyQ') {
        paddle.move(-15)
    }
    else if (e.code == 'KeyA') {
        paddle.move(15)
    }
};





// ball animation
function moveit(timestamp, duration){
    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
    var timestamp = timestamp || new Date().getTime()
    var runtime = timestamp - starttime
    ball.move()
    if (runtime < duration){ // if duration not met yet
        requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
            moveit(timestamp, duration)
        })
    }
}

requestAnimationFrame(function(timestamp){
    starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
    moveit(timestamp, 200000000) // 400px over 1 second
})