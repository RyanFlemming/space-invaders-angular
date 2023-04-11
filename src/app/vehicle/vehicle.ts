import { Bullet } from "../shared/bullet";
import { GameObject } from "../shared/game-object";

export class Vehicle extends GameObject {
  readonly bulletWidth = 4;
  readonly bulletHeight = 8;
  canvasHeight: number;
  bullets: Bullet[] = [];

  constructor(x: number, y: number, width: number, height: number, canvasHeight: number) {
    super(x, y, width, height);
    this.canvasHeight = canvasHeight;
    
  }

  override draw(context: CanvasRenderingContext2D): void {
    super.draw(context);
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw(context);
      this.bullets[i].update(0, 0);

      if (this.bullets[i].y < 0 || this.bullets[i].y > this.canvasHeight) {
        this.bullets.splice(i, 1);
      }
    }
  }

  shoot(dy: number){
    this.bullets.push(new Bullet(
      this.x + this.width / 2 - this.bulletWidth / 2,
      this.y = this.bulletHeight,
      this.bulletWidth,
      this.bulletHeight,
      dy
    ));
    console.log(this.bullets.length);
  }
}
