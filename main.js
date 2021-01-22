class Paddle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
        this.x = 0
        // change this to be half way down the canvas
        this.y = 0 
    }

    draw() {
        
    }

    clear() {

    }

    move(yOffset) {
        // dont overstep boundaries
    }
}


class Ball {
    constructor(radius, color, furry=false) {
        this.radius = radius
        this.color = color
        // inser image of furry ball instead of drawing a circle
        this.furry = furry

        // change these values to begin at the center of the canvas
        this.x = 0
        this.y = 0

        this.xSlope = 2
        this.ySlope = 1

        // update 60 frames per second
        this.velocity = 60
    }

    draw() {
        
    }

    clear() {

    }

    move(yOffset) {
        // dont overstep boundaries
    }
}

