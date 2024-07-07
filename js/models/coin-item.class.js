class CoinItem extends CollectableObject {
    audioCollect;

    constructor() {
        super();
        this.loadImage('img/4. Marcadores/1. Coins/1.png')
        this.floatingAnimation();
        this.audioCollect = new Audio('audio/coin-collect.mp3');
        this.audioCollect.volume = Math.random() * (1 - 0.5) + 0.5;

        this.x = 400 + Math.floor(Math.random() * 1000);
        this.y = 0 + Math.floor(Math.random() * 400);
    }
}