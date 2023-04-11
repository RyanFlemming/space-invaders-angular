import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GameBehaviorService } from '../shared/services/game-behavior.service';


@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef<HTMLCanvasElement>;
  isButtonVisible: boolean = true;

  constructor(private gameBehavior: GameBehaviorService){
  }

  ngOnInit(): void {
    
  }

  start() {
    console.log("starting game");
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      this.defineCanvas(context);
      this.gameBehavior.startGame(canvas.height, context)
    }
  }

  defineCanvas(context: CanvasRenderingContext2D){
    context.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    context.fillStyle = "black";
  }
}