class World {
    character = new Character();
    statusBarHealth = new StatusBar();
    statusCoins = new StatusCoins();
    statusBubbles = new StatusBubbles();
    statusPotions = new StatusPotions();
    endboss;
    level = level1;
    keyboard;
    canvas;
    cameraX = 0;
    ctx;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.ctx = this.canvas.getContext('2d');
        this.draw();
        this.setWorld();
        this.setStatus();
        this.checkCollisions();
        this.checkSounds();
        this.spawnEndboss();

        audioBackgroundMusic.loop = 'loop';
        audioBackgroundMusic.volume = 0.5;

        this.character.endX = this.level.endX;
    }


    /**
     * Check all object sound
     */
    checkSounds() {
        setInterval(() => {
            if (isMuteSound) {
                audioBackgroundMusic.pause();
                this.character.audioSleep.pause();
            } else {
                audioBackgroundMusic.play();
            }
        })
    }


    /**
     * Check all object collisions
     */
    checkCollisions() {
        setInterval(() => {
            if (this.endboss) {
                this.character.endX = this.endboss.x;
            }

            this.level.enemies.forEach((enemy,  enemyIndex) => {
                if (this.character.isColliding(enemy) && !this.character.isAttackSlap && !enemy.isDead()) {
                    this.character.hit();
                    this.statusBarHealth.setPercentage(this.character.health);
                }

                if (this.character.isColliding(enemy) && this.character.isAttackSlapRun) {
                    if (enemy instanceof PufferFish) {
                        enemy.health -= 100;
                    }
                }

                this.character.bubbles.forEach((bubble) => {
                    if (bubble.isColliding(enemy)) {
                        this.character.bubbles.splice(0, 1);
                        if (!isMuteSound) { bubble.audioPop.play(); }

                        if (enemy instanceof JellyFish) {
                            enemy.health -= 100;
                        }

                        if (enemy instanceof Endboss && bubble.potioned) {
                            enemy.isHurt = true;
                            enemy.health -= 25;
                        }
                    }
                });
            });
            
            this.level.items.forEach((item, index) => {
                if (item instanceof BubbleItem && item.isColliding(this.character)) {
                    if (!isMuteSound) { item.audioCollect.play(); }
                    this.level.items.splice(index, 1);
                    this.statusBubbles.value++;
                }

                if (item instanceof CoinItem && item.isColliding(this.character)) {
                    if (!isMuteSound) { item.audioCollect.play(); }
                    this.level.items.splice(index, 1);
                    this.statusCoins.value++;
                }

                if (item instanceof PotionItem && item.isColliding(this.character)) {
                    if (!isMuteSound) { item.audioCollect.play(); }
                    this.level.items.splice(index, 1);
                    this.statusPotions.value++;
                }
            })
        }, 1000 / 60);
    }


    /**
     * Spawn the endboss
     */
    spawnEndboss() {
        setInterval(() => {
            if (this.character.x+1 > this.level.endX && !this.endboss) {
                this.endboss = new Endboss(this.level.endX + 300, 0);
                this.level.enemies.push(this.endboss);
                this.character.isEndbossArrived = true;
                setTimeout(() => {
                    this.character.isEndbossArrived = false;
                }, 3000);
            }
        }, 1000 / 60);
    }


    /**
     * Set world top the character to get access
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * Set statusbars to the character to get access
     */
    setStatus() {
        this.character.statusBubbles = this.statusBubbles;
        this.character.statusPotions = this.statusPotions;
    }


    /**
     * Draw all game objects
     */
    draw() {
        this.clear()

        this.ctx.translate(this.cameraX, 0)

        this.level.backgrounds.forEach((background) => {
            this.drawObject(background)
        })

        this.level.items.forEach((item) => {
            this.drawObject(item);
        })

        this.level.enemies.forEach((enemy) => {
            this.drawObject(enemy);
        })

        this.character.bubbles.forEach((bubble) => {
            this.drawObject(bubble);
        })

        this.drawObject(this.character);


        this.ctx.translate(-this.cameraX, 0);
        this.drawObject(this.statusBarHealth);
        this.drawObject(this.statusCoins);
        this.drawObject(this.statusBubbles);
        this.drawObject(this.statusPotions);
        this.ctx.translate(this.cameraX, 0);

        this.ctx.translate(-this.cameraX, 0)

        this.redraw();
    }


    /**
     * Draw the choosen game object
     * @param {*} object Game Object
     */
    drawObject(object) {
        this.mirrorImage(object);
        object.draw(this.ctx);
        // object.drawFrame(this.ctx);
        this.mirrorImageRestore(object);
    }


    /**
     * Mirror the game object image
     * @param {*} object Game Object
     */
    mirrorImage(object) {
        if (object.mirror) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
    }


    /**
     * Restore image
     * @param {*} object Game Object
     */
    mirrorImageRestore(object) {
        if (object.mirror) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }


    /**
     * Clear image cache
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }


    /**
     * Redraw image
     */
    redraw() {
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        })
    }
}