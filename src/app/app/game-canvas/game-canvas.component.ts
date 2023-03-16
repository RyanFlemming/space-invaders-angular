import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameObject } from '../shared/game-object';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  gameObj: GameObject;
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(){
    this.gameObj = new GameObject(5, 5, 100, 100)
  }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      this.defineCanvas(context);
      this.gameObj.draw(context);
    }

  }

  defineCanvas(context: CanvasRenderingContext2D){
    context.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    context.fillStyle = "black";
  }

  

}
