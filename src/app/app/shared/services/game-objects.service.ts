import { Injectable } from '@angular/core';
import { Asteroid } from '../asteroid';
import { GameObject } from '../game-object';

@Injectable({
  providedIn: 'root'
})
export class GameObjectService {
  private asteroids: GameObject[] = [];
  private asteroidField: Asteroid[] = [];

  constructor(){
  }

  getAsteroidParts(x: number, y: number, width: number, height: number, noParts: number) : GameObject[] {
    for (var i = 0; i< noParts; i++){
      for (var j = 0; i < noParts; j++) {
        this.asteroids.push(new GameObject(
          x + i * width,
          y + j * height,
          width,
          height
        ));
      }
    }
    return this.asteroids;
  }

  generateAsteroidField(){
    for (var i = 0; i < 8; i++) {
      this.asteroidField.push(new Asteroid(
        85 + i * 85,
        600 - 180,
        5,
        5,
        8
      ));
    }
  }
}