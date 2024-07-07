class BubbleItem extends CollectableObject {
    audioCollect;

    constructor() {
        super();
        this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.floatingAnimation();
        this.audioCollect = new Audio('audio/bubble-pop.mp3');
        this.audioCollect.volume = Math.random() * (1 - 0.5) + 0.5;

        this.x = 400 + Math.floor(Math.random() * 1000);
        this.y = 0 + Math.floor(Math.random() * 400);
    }
}