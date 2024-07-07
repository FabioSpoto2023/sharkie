class DrawableObject {
    currentImage = 0;
    imageCache = []
    img;

    value = -1;
    width = 128;
    height = 128;
    offsetX = 0;
    offsetY = 0;
    offsetWidth = 0;
    offsetHeight = 0;
    offsetTextX = 0;
    offsetTextY = 0;
    x = 0;
    y = 0;


    /**
     * Load a image
     * @param {*} path image path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Load multiple images
     * @param {*} paths image path
     */
    loadImages(paths) {
        paths.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }


    /**
     * Draw graphic
     * @param {*} ctx CanvasRenderingContext2D
     */
    draw(ctx) {
        ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );

        if(this.value > -1) {
            this.drawText(ctx)
        }
    }


    /**
     * Draw text
     * @param {*} ctx CanvasRenderingContext2D
     */
    drawText(ctx) {
        ctx.font = "28px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(this.value, this.x+this.offsetTextX  , this.y+this.offsetTextY)
    }


    /**
     * Draw debug frames/boxes
     * @param {*} ctx CanvasRenderingContext2D
     */
    drawFrame(ctx) {
        if (!(this instanceof BackgroundObject) && !(this instanceof StatusBar)) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            if (this instanceof Character) {
                ctx.strokeStyle = 'blue';
                ctx.strokeStyle = 'red';
            }
            ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetWidth, this.height - this.offsetHeight);
            ctx.stroke();
        }
    }

}