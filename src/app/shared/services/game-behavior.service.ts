import { Injectable } from '@angular/core';
import { Asteroid } from '../asteroid';
import { GameObjectService } from './game-objects.service';

@Injectable({
  providedIn: 'root'
})
export class GameBehaviorService {
  private asteroids: Asteroid[];
  private asteroidsParts = 8;
  private noOfAsteroids = 8;
  private asteroidsSpace = 85;
  private enemiesEachLine = 20;
  private enemyLines = 8;
  private enemySpace = 30;
  private enemyFireRate = 1000;
  private enemyFireTimer = 0;
  private enemyDirection = 1;
  private enemyStep = 5;

  constructor(private gameObjService: GameObjectService) {
    this.asteroids = [];
  }

  startGame(canvasHeight: number, canvasWidth: number, context: CanvasRenderingContext2D){
    for (var i = 0; i < this.noOfAsteroids; i++) {
      this.asteroids.push(new Asteroid(
        this.asteroidsSpace + i * this.asteroidsSpace,
        canvasHeight - 180,
        5,
        5,
        this.asteroidsParts))
        this.asteroids[i].draw(context);
    }

    this.gameObjService.generatePlayer(canvasWidth, canvasHeight, context);
    this.gameObjService.generateEnemies(this.enemyLines, this.enemiesEachLine, this.enemySpace, context);
  }
}
