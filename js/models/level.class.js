class Level {
    enemies = [];
    items;
    backgrounds;
    endX = 1000;

    constructor(enemies, items, backgrounds) {
        this.enemies = enemies;
        this.items = items;
        this.backgrounds = backgrounds;
    }
}