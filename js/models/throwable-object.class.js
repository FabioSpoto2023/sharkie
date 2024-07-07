class ThrowableObject extends MoveableObject {    
    constructor(x, y, directon) {
        super();
        this.width = 48;
        this.height = 48;
        this.x = x;
        this.y = y;
        this.speedX = 10;
        this.speedX = this.speedX * directon
        this.acceleration = 0;
        this.applyGravity();
    }
}