import { Injectable } from '@angular/core';
import { Player } from 'src/app/vehicle/player';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Asteroid } from '../asteroid';
import { GameObject } from '../game-object';

@Injectable({
  providedIn: 'root'
})
export class GameObjectService {
  private player!: Player;
  private asteroids: GameObject[] = [];
  private enemies: Vehicle[] = [];

  constructor(){
  }

  getAsteroidParts(x: number, y: number, width: number, height: number, noParts: number) : GameObject[] {
    for (var i = 0; i < noParts; i++){
      for (var j = 0; j < noParts; j++) {
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

  generatePlayer(canvasWidth: number, canvasHeight: number, context: CanvasRenderingContext2D) {
    this.player = new Player(canvasWidth / 2 - 50, canvasHeight - 50, 20, 20, canvasHeight, canvasWidth);
    this.player.draw(context);
  }

  generateEnemies(enemyLines: number, enemiesEachLine: number, enemySpace: number, context: CanvasRenderingContext2D){
    for (let i = 0; i < enemyLines; i++) {
      for (let j = 0; j < enemiesEachLine; j++) {
        this.enemies.push(new Vehicle(
          enemySpace + j * enemySpace,
          enemySpace + i * enemySpace,
          20,
          20,
          0
        ));
        this.enemies[i].draw(context);
      }
    }
  }
}