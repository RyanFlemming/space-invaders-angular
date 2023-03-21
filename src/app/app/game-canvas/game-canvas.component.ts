import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Bullet } from '../shared/bullet';
import { Asteroid } from '../shared/asteroid';
import { GameObject } from '../shared/game-object';
import { Vehicle } from '../vehicle/vehicle';


@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  //gameObj: GameObject;
  //bulletObj: Bullet;
  //shipObj: Vehicle;
  //asteroid: Asteroid;
  asteroids: Asteroid[];
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef<HTMLCanvasElement>;
  asteroidsParts = 8;
  noOfAsteroids = 8;
  asteroidsSpace = 85;
  enemiesEachLine = 20;
  enemyLines = 8;
  enemySpace = 30;
  enemyFireRate = 1000;
  enemyFireTimer = 0;
  enemyDirection = 1;
  enemyStep = 5;

  constructor(){
    /* this.gameObj = new GameObject(5, 5, 100, 100);
    this.shipObj = new Vehicle(240, 300, 5, 15, 0); */
    this.asteroids = [];
    
  }

  ngOnInit(): void {
    
  }

  defineCanvas(context: CanvasRenderingContext2D){
    context.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    context.fillStyle = "black";
  }

  doStuff() {
    console.log("doing stuff");
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      this.defineCanvas(context);
      /* for (var i = 0; i < this.noOfAsteroids; i++) {
      this.asteroids.push(new Asteroid(
        this.asteroidsSpace + i * this.asteroidsSpace,
        canvas.height - 180,
        5,
        5,
        this.asteroidsParts
      ));
    } */
      for (var i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(context);
        console.log("Asteroids in array: " + this.asteroids.length);
      }
      //this.gameObj.draw(context);
      //this.shipObj.draw(context);
    }
  }
}

