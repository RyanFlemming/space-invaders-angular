import { GameObject } from "./game-object";

export class Bullet extends GameObject {

    super(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
}
