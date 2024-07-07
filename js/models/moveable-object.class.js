class MoveableObject extends DrawableObject {
    mirror = false;
    health = 100;
    lastHit = 0;

    speedX = 0;
    speedY = 0;
    acceleration = 0.1;
    groundedY = 320;


    /**
     * Move object to the left
     * @param {*} speed Speed of movement
     */
    moveLeft(speed) {
        setInterval(() => {
            if (!isPause && !this.isDead()) {
                this.x -= speed;
            }
        }, 1000 / 60);
    }


    /**
     * Play animation of object
     * @param {*} images image path
     * @returns frame as integer
     */
    playAnimation(images) {
        if (!isPause) {
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            return i;
        }
    }


    /**
     * Check if object is collided with other object
     * @param {*} object Moveable Object
     * @returns is object collided
     */
    isColliding(object) {
        return this.x + this.offsetX < object.x + object.offsetX + object.width - object.offsetWidth &&
            this.x + this.offsetX + this.width - this.offsetWidth > object.x + object.offsetX &&
            this.y + this.offsetY < object.y + object.offsetY + object.height - object.offsetHeight &&
            this.y + this.offsetY + this.height - this.offsetHeight > object.y + object.offsetY
    }


    /**
     * Is object hitted
     */
    hit() {
        this.health -= 1;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    
    /**
     * Is object dead
     * @returns is object dead
     */
    isDead() {
        return (this.health <= 0);
    }


    /**
     * Check if object is hurted
     * @returns is hurted
     */
    isHurt() {
        let timePassed = new Date() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }


    /**
     * Apply gravity physics
     */
    applyGravity() {
        setInterval(() => {
            if (!isPause && !this.isDead()) {
                if (!this.isGrounded() || this.speedY > 0) {
                    this.x += this.speedX;
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }
        }, 1000 / 60);
    }


    /**
     * Check if object hit the ground
     * @returns is grounded
     */
    isGrounded() {
        return this.y > this.groundedY;
    }
}