import { Vehicle } from "./vehicle";

export class Player extends Vehicle {
    canvasWidth: number;

    constructor(x: number, y: number, width: number, height: number, canvasHeight: number, canvasWidth: number) {
        super(x, y, width, height, canvasHeight);
        this.canvasWidth = canvasWidth;
    }

    override update(dx: number, dy: number) {
        if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x + this.width > this.canvasWidth) {
            this.x = this.canvasWidth - this.width;
        }
    }
}
