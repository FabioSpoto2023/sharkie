class JellyFish extends MoveableObject {
    width = 64;
    height = 64;
    speed = 0.15 + Math.random() * 0.5;

    isLila = false;
    isYellow = false;
    isGreen = false;
    isPink = false;

    IMAGES_MOVE_LILA = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    IMAGES_MOVE_YELLOW = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];

    IMAGES_MOVE_GREEN = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ];

    IMAGES_MOVE_PINK = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];

    IMAGES_DEAD_LILA = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    IMAGES_DEAD_YELLOW = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
    ];

    IMAGES_DEAD_GREEN = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
    ];

    IMAGES_DEAD_PINK = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');

        this.loadImages(this.IMAGES_MOVE_LILA);
        this.loadImages(this.IMAGES_MOVE_YELLOW);
        this.loadImages(this.IMAGES_MOVE_GREEN);
        this.loadImages(this.IMAGES_MOVE_PINK);

        this.loadImages(this.IMAGES_DEAD_LILA);
        this.loadImages(this.IMAGES_DEAD_YELLOW);
        this.loadImages(this.IMAGES_DEAD_GREEN);
        this.loadImages(this.IMAGES_DEAD_PINK);

        this.setRandomFeeling();
        this.moveLeft(this.speed);
        this.animate();
        this.update();

        this.x = 400 + Math.floor(Math.random() * 1000);
        this.y = 0 + Math.floor(Math.random() * 400);
    }


    /**
     * Update informations
     */
    update() {
        setInterval(() => {
            if (this.isDead()) {
                this.y -= 2;
            }            
        }, 1000 / 60);
    }


    /**
     * Animate in general
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                if (this.isLila) {
                    this.playAnimation(this.IMAGES_DEAD_LILA)
                } else if (this.isYellow) {
                    this.playAnimation(this.IMAGES_DEAD_YELLOW)
                } else if (this.isGreen) {
                    this.playAnimation(this.IMAGES_DEAD_GREEN)
                } else if(this.isPink) {
                    this.playAnimation(this.IMAGES_DEAD_PINK)
                }
            } else if(this.isLila) {
                this.playAnimation(this.IMAGES_MOVE_LILA);
            } else if(this.isYellow) {
                this.playAnimation(this.IMAGES_MOVE_YELLOW);
            } else if(this.isGreen) {
                this.playAnimation(this.IMAGES_MOVE_GREEN);
            } else if(this.isPink) {
                this.playAnimation(this.IMAGES_MOVE_PINK);
            }
            
        }, 150);
    }


    /**
     * Set random feeling animation
     */
    setRandomFeeling() {
        const randomIndex = Math.floor(Math.random() * 4);
        switch (randomIndex) {
            case 0:
                this.isLila = true;
            case 1:
                this.isYellow = true;
            case 2:
                this.isGreen = true;
            case 3:
            this.isPink = true;
        }
    }
}