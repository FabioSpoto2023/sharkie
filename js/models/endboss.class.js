class Endboss extends MoveableObject {
    width = 256;
    height = 256;
    offsetX = 10;
    offsetY = 75;
    offsetWidth = 25;
    offsetHeight = 100;
    isIntroduce = true;
    isHurt = false;
    isDeadAnimation = false;
    isDeadAnimationOnce = false;
    isAttacking = false;

    isMoveUp = false;
    isMoveDown = false;

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_IDLE = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
        this.update();

        setTimeout(() => {
            this.attack();
        }, 10000)
    }


    /**
     * Attack the character
     */
    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.attack();
        }, 10000)
    }


    /**
     * Animations in general
     */
    animate() {
        setInterval(() => {
            if (this.isIntroduce) {
                this.animateIntroduce();
            } else if (this.isHurt) {
                this.animateHurt();
            } else if (this.isDeadAnimation && !this.isDeadAnimationOnce) {
                this.animateDead();
            } else if (this.isDeadAnimationOnce) {
                this.loadImage(this.IMAGES_DEAD[this.IMAGES_DEAD.length - 1]);
            } else if (this.isAttacking) {
                this.animateAttack();
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 150);
    }


    /**
     * Animate attack
     */
    animateAttack() {
        let frame = this.playAnimation(this.IMAGES_ATTACK);
        if (frame == this.IMAGES_ATTACK.length - 2) {
            this.x -= 100;
        }
        if (frame == this.IMAGES_ATTACK.length - 1) {
            this.isAttacking = false;
            this.x += 100;
        }
    }


    /**
     * Animate dead
     */
    animateDead() {
        let frame = this.playAnimation(this.IMAGES_DEAD);
        if (frame == this.IMAGES_DEAD.length - 1) {
            this.isDeadAnimation = false;
            this.isDeadAnimationOnce = true;
        }
    }


    /**
     * Animate hurt
     */
    animateHurt() {
        let frame = this.playAnimation(this.IMAGES_HURT);
        if (frame == this.IMAGES_HURT.length - 1) {
            this.isHurt = false;
        }
    }


    /**
     * Animate Introduce
     */
    animateIntroduce() {
        let frame = this.playAnimation(this.IMAGES_INTRODUCE);
        if (frame == this.IMAGES_INTRODUCE.length - 1) {
            this.isIntroduce = false;
            this.isMoveDown = true;
        }
    }


    /**
     * Update informations
     */
    update() {
        setInterval(() => {
            if (this.isDead() && !this.isDeadAnimation) {
                showGameWin();
                this.isDeadAnimation = true;
                this.isMoveDown = false;
                this.isMoveUp = false;
            }

            if (this.isMoveDown) {
                this.y += 1
                if (this.y > 250) {
                    this.isMoveDown = false;
                    this.isMoveUp = true;
                }
            } else if (this.isMoveUp) {
                this.y -= 1
                if (this.y < -100) {
                    this.isMoveDown = true;
                    this.isMoveUp = false;
                }
            }

            if (this.isMoveDown || this.isMoveUp) {
                this.x -= 0.2;
            }



        }, 1000 / 60)
    }
}