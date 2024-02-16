import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { BmiComponent } from './bmi/bmi.component';
import { CubeComponent } from './cube/cube.component';
import { DivisionComponent } from './division/division.component';
import { EmiComponent } from './emi/emi.component';
import { LengthconvertComponent } from './lengthconvert/lengthconvert.component';
import { LoginComponent } from './login/login.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { RegisterComponent } from './register/register.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:"addition",component:AdditionComponent},
  {path:"bmi",component:BmiComponent},
  {path:"cube",component:CubeComponent},
  {path:"division",component:DivisionComponent},
  {path:"emi",component:EmiComponent},
  {path:"lengthconvert",component:LengthconvertComponent},
  {path:"login",component:LoginComponent},
  {path:"multiplication",component:MultiplicationComponent},
  {path:"register",component:RegisterComponent},
  {path:"subtraction",component:SubtractionComponent},
  {path:"temperature",component:TemperatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
