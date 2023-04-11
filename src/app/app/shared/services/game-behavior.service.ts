import { Injectable } from '@angular/core';
import { Asteroid } from '../asteroid';

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

  constructor() {
    this.asteroids = [];
  }

  startGame(height: number, context: CanvasRenderingContext2D){
    for (var i = 0; i < this.noOfAsteroids; i++) {
      this.asteroids.push(new Asteroid(
        this.asteroidsSpace + i * this.asteroidsSpace,
        height - 180,
        5,
        5,
        this.asteroidsParts
      ));
    }

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(context);
      console.log("Asteroids in array: " + this.asteroids.length);
    }
  }
}
