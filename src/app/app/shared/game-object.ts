export class GameObject {
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    // to do: add color

    constructor(x: number, y: number, width: number, height: number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context: CanvasRenderingContext2D){
        context.fillStyle = 'white'; // temporary solution, change later
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(x: number, y: number){
        this.x += x;
        this.y += y;
    }

    collisionDetected(gameObj: GameObject){
        return (this.x < gameObj.x + gameObj.width
            && this.x + this.width > gameObj.x
            && this.y < gameObj.y + gameObj.height
            && this.y + this.height > gameObj.y);
    }
}
