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
        this.x = 0;
        this.y = 0;

        this.xSlope = 2;
        this.ySlope = 1;

        // update 60 frames per second
        this.velocity = 60;
    }

    draw() {
        
    }

    clear() {

    }

    move(yOffset) {
        // dont overstep boundaries
    }
}


const paddle = new Paddle(30,100,'blue');


document.onkeypress = (e) => {
    console.log(e.code)
    // arrow left	37
    if (e.code === 37) {
        
    }
    // arrow up	38
    else if (e.code === 38) {
        paddle.move(-10)
    }
    // arrow right	39
    else if (e.code === 39) {
                
    }
    // arrow down	40
    else if (e.code === 40) {
        paddle.move(10)
    }
};