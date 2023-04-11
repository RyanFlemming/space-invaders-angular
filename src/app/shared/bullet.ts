import { GameObject } from "./game-object";

export class Bullet extends GameObject {
  newPositionY: number;

  constructor(x: number, y: number, width: number, height: number, posY: number){
    super(x, y, width, height);
    this.newPositionY = posY;
  }

  override update(dx: number, dy: number){
    this.y += this.newPositionY;
  }
}
