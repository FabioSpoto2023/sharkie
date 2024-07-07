class PufferFish extends MoveableObject {
    width = 64;
    height = 64;
    speed = 0.15 + Math.random() * 0.5;

    isAngry = false;
    isAngrySwim = false;

    isVeryAngry = false;
    isVeryAngrySwim = false;

    isSuperAngry = false;
    isSuperAngrySwim = false;

    IMAGE_DEAD_ANGRY = 'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png';
    IMAGE_DEAD_VERY_ANGRY = 'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png';
    IMAGE_DEAD_SUPER_ANGRY = 'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png';

    IMAGES_MOVE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_ANGRY = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ];

    IMAGES_ANGRY_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];

    IMAGES_VERY_ANGRY = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    ];

    IMAGES_VERY_ANGRY_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
    ];

    IMAGES_SUPER_ANGRY = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
    ];

    IMAGES_SUPER_ANGRY_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_MOVE);
        this.loadImages(this.IMAGES_ANGRY);
        this.loadImages(this.IMAGES_ANGRY_SWIM);
        this.loadImages(this.IMAGES_VERY_ANGRY);
        this.loadImages(this.IMAGES_VERY_ANGRY_SWIM);
        this.loadImages(this.IMAGES_SUPER_ANGRY);
        this.loadImages(this.IMAGES_SUPER_ANGRY_SWIM);
        this.moveLeft(this.speed);
        this.animate();
        this.update();

        let randomDelayFeeling = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
        this.setRandomFeeling(randomDelayFeeling);

        this.x = 400 + Math.floor(Math.random() * 1000);
        this.y = 0 + Math.floor(Math.random() * 400);
    }


    /**
     * Update object informations
     */
    update() {
        let directionX = 5 * (Math.random() < 0.5 ? -1 : 1);
        let directionY = 5 * (Math.random() < 0.5 ? -1 : 1);
        setInterval(() => {
         if (this.isDead()) {
            this.x += directionX;
            this.y += directionY;
         }   
        }, 1000 / 60)
    }


    /**
     * Animate object in general
     */
    animate() {
        setInterval(() => {
            if (this.isAngry && !this.isDead()) {
                let frame = this.playAnimation(this.IMAGES_ANGRY);
                if (frame == this.IMAGES_ANGRY.length-1) {
                    this.isAngry = false;
                    this.isAngrySwim = true;
                }
            } else if (this.isAngrySwim && !this.isDead()) {
                this.playAnimation(this.IMAGES_ANGRY_SWIM);
            } else if (this.isVeryAngry && !this.isDead()) {
                let frame = this.playAnimation(this.IMAGES_VERY_ANGRY);
                if (frame == this.IMAGES_VERY_ANGRY.length-1) {
                    this.isVeryAngry = false;
                    this.isVeryAngrySwim = true;
                }
            } else if (this.isVeryAngrySwim && !this.isDead()) {
                this.playAnimation(this.IMAGES_VERY_ANGRY_SWIM);
            } else if (this.isSuperAngry && !this.isDead()) {
                let frame = this.playAnimation(this.IMAGES_SUPER_ANGRY);
                if (frame == this.IMAGES_SUPER_ANGRY.length-1) {
                    this.isSuperAngry = false;
                    this.isSuperAngrySwim = true;
                }
            } else if (this.isSuperAngrySwim && !this.isDead()) {
                this.playAnimation(this.IMAGES_SUPER_ANGRY_SWIM);
            } else if (this.isDead()) {

                if (this.isVeryAngrySwim) {
                    this.loadImage(this.IMAGE_DEAD_VERY_ANGRY);
                } else if (this.isSuperAngrySwim) {
                    this.loadImage(this.IMAGE_DEAD_SUPER_ANGRY);
                } else {
                    this.loadImage(this.IMAGE_DEAD_ANGRY);
                }
            } else {    
                this.playAnimation(this.IMAGES_MOVE);
            }
            
        }, 150);
    }


    /**
     * Set random feeling animation after specific time
     * @param {*} delay delay in milliseconds
     */
    setRandomFeeling(delay) {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * 4);
            
            switch (randomIndex) {
                case 0:
                    this.isAngry = true;
                case 1:
                    this.isVeryAngry = true;
                case 2:
                    this.isSuperAngry = true;
            }

        }, delay)
    }
}