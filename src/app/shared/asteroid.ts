import { AppInjector } from "src/app/app.module";
import { GameObject } from "./game-object";
import { GameObjectService } from "./services/game-objects.service";

export class Asteroid {
  
  private asteroidParts: GameObject[] = [];

  constructor(x: number, y: number, width: number, height: number, noParts: number){
    const gameObjectService = AppInjector.get(GameObjectService); // using in place of constructor DI

    this.asteroidParts = gameObjectService.getAsteroidParts(x, y, width, height, noParts);
  }



  draw(context: CanvasRenderingContext2D){
    for (var i = 0; i < this.asteroidParts.length; i++){
      this.asteroidParts[i].draw(context);
    }
  }

  collidesWith(gameObj: GameObject){
    for (var i = 0; i < this.asteroidParts.length; i++) {
      if (this.asteroidParts[i].collisionDetected(gameObj)) {
        return true;
      }
    }
    return false;
  }

  removeOnCollision(gameObj: GameObject) {
    for (var i = 0; i < this.asteroidParts.length; i++) {
      if (this.asteroidParts[i].collisionDetected(gameObj)) {
        this.asteroidParts.splice(i, 1);
        break;
      }
    }
  }
}
