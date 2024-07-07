class PotionItem extends CollectableObject {
    audioCollect;

    constructor() {
        super();
        this.height = 64;
        this.loadImage('img/4. Marcadores/Posión/Dark - Right.png')
        this.audioCollect = new Audio('audio/potion-collect.mp3');
        this.audioCollect.volume = Math.random() * (1 - 0.5) + 0.5;

        this.x = 400 + Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random() * (410 - 350 + 1)) + 350;
    }
}