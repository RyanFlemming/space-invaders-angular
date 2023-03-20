import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Bullet } from '../shared/bullet';
import { GameObject } from '../shared/game-object';
import { Vehicle } from '../vehicle/vehicle';


@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  gameObj: GameObject;
  //bulletObj: Bullet;
  shipObj: Vehicle;
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(){
    // add obj's to canvas, replace later
    this.gameObj = new GameObject(5, 5, 100, 100);
    this.shipObj = new Vehicle(240, 300, 5, 15, 0);  
  }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    canvas.addEventListener('click', () => {
      console.log('clicked canvas');
      this.shipObj.shoot(-5);
    })
    if(context) {
      this.defineCanvas(context);
      this.gameObj.draw(context);
      this.shipObj.draw(context);
    }
  }

  defineCanvas(context: CanvasRenderingContext2D){
    context.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    context.fillStyle = "black";
  }
}
