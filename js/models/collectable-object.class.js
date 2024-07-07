class CollectableObject extends MoveableObject {
    directions = [1, -1];
    currentDirection = 0;

    constructor() {
        super();
        this.width = 48;
        this.height = 48;
        this.x = -50 + Math.random() * 650;
        this.y = 0 + Math.random() * 450;
        this.speedY = 0.2;
        this.acceleration = this.speedY / 100;
        this.currentDirection = Math.floor(Math.random() * 2);
        this.groundedY = 1000;
    }


    /**
     * Animate floating
     */
    floatingAnimation() {
        this.applyGravity();
        setInterval(() => {
            if (!isPause) {
                let i = this.currentDirection % this.directions.length;
                if (this.directions[i] == -1) {
                    this.speedY = this.speedY * this.directions[i];

                } else {
                    this.speedY = this.speedY * this.directions[i];
                }

                this.currentDirection++;
            }
        }, 250)
    }
}