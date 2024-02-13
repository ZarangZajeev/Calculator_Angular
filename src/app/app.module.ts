import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { CubeComponent } from './cube/cube.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { DivisionComponent } from './division/division.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { BmiComponent } from './bmi/bmi.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { AverageComponent } from './average/average.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    CubeComponent,
    SubtractionComponent,
    DivisionComponent,
    MultiplicationComponent,
    BmiComponent,
    TemperatureComponent,
    AverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
