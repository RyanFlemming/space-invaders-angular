import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameCanvasComponent } from './app/game-canvas/game-canvas.component';
import { SnowflakeComponent } from './app/snowflake/snowflake.component';
import { VehicleComponent } from './app/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCanvasComponent,
    SnowflakeComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
