import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameCanvasComponent } from './game-canvas/game-canvas.component';


export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent,
    GameCanvasComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Using AppInjecter in place of using constructor
  constructor(private injector: Injector){
    AppInjector = this.injector;
  }
}
