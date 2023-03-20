import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Bullet } from '../shared/bullet';
import { GameObject } from '../shared/game-object';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  gameObj: GameObject;
  bulletObj: Bullet;
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(){
    // add obj's to canvas, replace later
    this.gameObj = new GameObject(5, 5, 100, 100);
    this.bulletObj = new Bullet(200, 500, 5, 5, 1);
  }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      this.defineCanvas(context);
      this.gameObj.draw(context);
      this.bulletObj.draw(context);
      
    }

  }

  defineCanvas(context: CanvasRenderingContext2D){
    context.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    context.fillStyle = "black";
  }

  

}
