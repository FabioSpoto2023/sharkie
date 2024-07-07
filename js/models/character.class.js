class Character extends MoveableObject {
    statusBubbles;
    statusPotions;

    bubbles = [];
    isBubbleThrow = false;
    isAttackSlapRun = false
    lastDirection = 1;
    width = 192;
    height = 192;
    speed = 1
    offsetX = 32;
    offsetY = 80;
    offsetWidth = 64;
    offsetHeight = 115;
    lastSleep;
    isSleeping = false;
    sleepDelay = 15;
    isAttackBubble = false;
    isAttackBubblePotioned = false;
    isAttackSlap = false;
    isDeadAnimation = false;
    x = 100;
    y = 200;
    isEndbossArrived = false;

    world;
    audioSwim;
    audioShotBubble;
    audioSleep;
    audioSlap;

    endX;
    gameOver = false;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/I1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ]

    IMAGES_ATTACK_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ]

    IMAGES_ATTACK_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ]

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_ATTACK_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_SLAP);
        this.animate()
        this.update()

        this.lastSleep = new Date().getSeconds();
        this.audioSwim = new Audio('audio/swim.mp3');
        this.audioShotBubble = new Audio('audio/shot-bubble.mp3');
        this.audioSlap = new Audio('audio/slap.mp3');
        this.audioSleep = new Audio('audio/sleep.mp3');


        this.audioShotBubble.playbackRate = 1.1;
        this.audioSlap.playbackRate = 2;
        this.audioSwim.playbackRate = 2;
        this.audioSleep.volume = 0.7;
        this.audioSleep.loop = 'loop';
    }

    /**
     * Update object informations
     */
    update() {
        setInterval(() => {
            this.audioSwim.pause();
            this.keyboardEvents();
            this.animatioDeadFloat();
            this.checkEndbossArrived();
            this.checkUserOutOfScreen();
            this.world.cameraX = -this.x + 100;
        })
    }


    /**
     * Check if character have arrived the endboss
     */
    checkEndbossArrived() {
        if (this.isEndbossArrived) {
            if (this.y < 150) {
                this.y += 0.5
            } else {
                this.y -= 0.5
            }
        }
    }


    /**
     * Check if character is out of screen/map
     */
    checkUserOutOfScreen() {
        if (this.y < -80) {
            this.y = -80;
        }

        if (this.y > 320) {
            this.y = 320;
        }

        if (this.x < 0) {
            this.x = 0;
        }
    }


    /**
     * Check keyboard events
     */
    keyboardEvents() {
        if (!this.isDead() && !this.isAttackBubble && !this.isAttackSlap && !isPause && !this.isEndbossArrived) {
            this.keyboardLeft();
            this.keyboardRight();
            this.keyboardUp();
            this.keyboardDown();
            this.keyboardSpace();
            this.keyboardD();
        }
    }


    /**
     * Press key D
     */
    keyboardD() {
        if (this.world.keyboard.D) {
            this.isAttackSlap = true;
            this.attackSlap();
        }
    }


    /**
     * Press key Space
     */
    keyboardSpace() {
        if (this.world.keyboard.SPACE && this.statusBubbles.value > 0) {
            this.isAttackBubble = true;
            if (this.statusPotions.value > 0) {
                this.isAttackBubblePotioned = true;
            } else {
                this.isAttackBubblePotioned = false;
            }
        }
    }


    /**
     * Press key Down
     */
    keyboardDown() {
        if (this.world.keyboard.DOWN) {
            this.y += this.speed;
            if (!isMuteSound) { this.audioSwim.play(); }
        }
    }


    /**
     * Press key Up
     */
    keyboardUp() {
        if (this.world.keyboard.UP) {
            this.y -= this.speed;
            if (!isMuteSound) { this.audioSwim.play(); }
        }
    }


    /**
     * Press key Right
     */
    keyboardRight() {
        if (this.world.keyboard.RIGHT && this.x < this.endX) {
            this.x += this.speed;
            this.mirror = false;
            if (!isMuteSound) { this.audioSwim.play(); }
            this.lastDirection = 1;
        }
    }


    /**
     * Press key Left
     */
    keyboardLeft() {
        if (this.world.keyboard.LEFT) {
            this.x -= this.speed;
            this.mirror = true;
            if (!isMuteSound) { this.audioSwim.play(); }
            this.lastDirection = -1;
        }
    }


    /**
     * Shot bubbles
     * @param {*} direction the direction
     * @param {*} potioned is a potioned bubble or not
     */
    attackBubble(direction, potioned) {
        if (!this.isBubbleThrow) {
            this.isBubbleThrow = true;
            if (!isMuteSound) { this.audioShotBubble.play(); }
            this.checkBubbleDirection(direction, potioned);
            this.statusBubbles.value--;
            if (this.isAttackBubblePotioned) {
                this.statusPotions.value--;
            }
            this.checkStatusBubbles();
            setTimeout(() => {
                this.bubbles.splice(0, 1);
            }, 5000);
        }
    }


    /**
     * Check shot bubble direction
     * @param {*} direction the direction
     * @param {*} potioned is a potioned bubble or not
     */
    checkBubbleDirection(direction, potioned) {
        if (direction == 1) {
            if (potioned) {
                this.bubbles.push(new Bubble(this.x + 150, this.y + 85, direction, potioned));
            } else {
                this.bubbles.push(new Bubble(this.x + 150, this.y + 85, direction, potioned));
            }
        } else if (direction == -1) {
            if (potioned) {
                this.bubbles.push(new Bubble(this.x, this.y + 85, direction, potioned));
            } else {
                this.bubbles.push(new Bubble(this.x, this.y + 85, direction, potioned));
            }
        }
    }


    /**
     * Do attack slap
     */
    attackSlap() {
        if (!this.isAttackSlapRun) {
            this.isAttackSlapRun = true;
        }
    }


    /**
     * Check if you have enougth bubbles
     */
    checkStatusBubbles() {
        if (this.statusBubbles.value < 1) {
            this.statusBubbles.value = 0;
        }
    }


    /**
     * Animate character in general
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.animateDead();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAttackSlap) {
                this.animateAttackSlap();
            } else if (this.isAttackBubble) {
                this.animateAttackBubble();
            } else if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT && !this.world.keyboard.UP && !this.world.keyboard.DOWN && !this.world.keyboard.SPACE) {
                this.animateSleep();
            } else {
                this.animateSwim();
            }
        }, 100);
    }


    /**
     * Animate attack bubble
     */
    animateAttackBubble() {
        let frame = this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
        if (frame == this.IMAGES_ATTACK_BUBBLE.length - 1) {
            this.isAttackBubble = false;
            this.isBubbleThrow = false;
            this.attackBubble(this.lastDirection, this.isAttackBubblePotioned);
        }
    }


    /**
     * Animate attack slap
     */
    animateAttackSlap() {
        let frame = this.playAnimation(this.IMAGES_ATTACK_SLAP);
        if (frame == this.IMAGES_ATTACK_SLAP.length - 2) {
            this.offsetWidth = 40;
            if (!isMuteSound) { this.audioSlap.play(); }
        }

        if (frame == this.IMAGES_ATTACK_SLAP.length - 1) {
            this.offsetWidth = 64;
            this.isAttackSlap = false;
            this.isAttackSlapRun = false;

        }
    }


    /**
     * Animate character dead
     */
    animateDead() {
        if (!this.isDeadAnimation) {
            let frame = this.playAnimation(this.IMAGES_DEAD);
            if (frame == this.IMAGES_DEAD.length - 1) {
                this.isDeadAnimation = true;
            }
        }
    }


    /**
     * Animate floating if character is dead
     */
    animatioDeadFloat() {
        if (this.isDead() && this.isDeadAnimation && !this.gameOver) {
            this.y -= 0.1;
            showGameOver();
            this.gameOver = true;
        }
    }


    /**
     * Animate sleep
     */
    animateSleep() {
        if (new Date().getSeconds() - this.lastSleep > this.sleepDelay) {
            if (!this.isSleeping) {
                let animationFrame = this.playAnimation(this.IMAGES_SLEEP);
                if (animationFrame == this.IMAGES_SLEEP.length - 1) {
                    this.isSleeping = true;
                }
            } else {
                this.playAnimation(this.IMAGES_SLEEP.slice(-4));
                if (!isMuteSound) { this.audioSleep.play(); }
            }

        } else {
            this.playAnimation(this.IMAGES_IDLE);
            this.audioSleep.pause();
        }
    }


    /**
     * Animate swim
     */
    animateSwim() {
        this.playAnimation(this.IMAGES_SWIM);
        this.lastSleep = new Date().getSeconds();
        this.isSleeping = false;
        this.audioSleep.pause();
    }
}