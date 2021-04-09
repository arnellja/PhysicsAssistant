import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinearKinematicsComponent } from './linear-kinematics/linear-kinematics.component';
import { VectorProjectilesComponent } from './vector-projectiles/vector-projectiles.component';
import { ForcesComponent } from './forces/forces.component';
import { LinearEnergyComponent } from './linear-energy/linear-energy.component';
import { RotationalQuantitiesComponent } from './rotational-quantities/rotational-quantities.component';
import { AngularMomentumComponent } from './angular-momentum/angular-momentum.component';
import { UniversalGraviationComponent } from './universal-graviation/universal-graviation.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LinearKinematicsComponent,
    VectorProjectilesComponent,
    ForcesComponent,
    LinearEnergyComponent,
    RotationalQuantitiesComponent,
    AngularMomentumComponent,
    UniversalGraviationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router:Router) {}
}
