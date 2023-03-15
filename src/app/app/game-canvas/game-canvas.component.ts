import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  @ViewChild('canvas', {static: true}) myCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');

    if(context) {
      this.defineCanvas(context);
    }
  }

  defineCanvas(context: CanvasRenderingContext2D){
    context.rect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height)
    context.fillStyle = "black";
    context.fill()
  }

}
