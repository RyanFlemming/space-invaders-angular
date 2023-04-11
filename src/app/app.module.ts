import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GameCanvasComponent } from './game-canvas/game-canvas.component';
=======
import { GameCanvasComponent } from './app/game-canvas/game-canvas.component';
>>>>>>> f7326b1e36b8bb5a3176e0fcd12fdfd1e9d9f060

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
