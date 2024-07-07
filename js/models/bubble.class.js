class Bubble extends ThrowableObject {
    audioPop;
    potioned;

    constructor(x, y, directon, potioned) {
        super(x, y, directon);
        this.potioned = potioned;
        if (potioned) {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        } else {
            this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        }
        this.groundedY = 1000;
        this.audioPop = new Audio('audio/bubble-pop.mp3');
    }
}