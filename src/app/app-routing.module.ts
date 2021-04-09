import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMomentumComponent } from './angular-momentum/angular-momentum.component';
import { ForcesComponent } from './forces/forces.component';
import { HomeComponent } from './home/home.component';
import { LinearEnergyComponent } from './linear-energy/linear-energy.component';
import { LinearKinematicsComponent } from './linear-kinematics/linear-kinematics.component';
import { RotationalQuantitiesComponent } from './rotational-quantities/rotational-quantities.component';
import { UniversalGraviationComponent } from './universal-graviation/universal-graviation.component';
import { VectorProjectilesComponent } from './vector-projectiles/vector-projectiles.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'linear-kinematics',
    component: LinearKinematicsComponent
  },
  {
    path: 'vector-projectiles',
    component: VectorProjectilesComponent
  },
  {
    path: 'forces',
    component: ForcesComponent
  },
  {
    path: 'linear-energy',
    component: LinearEnergyComponent
  },
  {
    path: 'rotational-quantities',
    component: RotationalQuantitiesComponent
  },
  {
    path: 'angular-momentum',
    component: AngularMomentumComponent
  },
  {
    path: 'universal-gravitation',
    component: UniversalGraviationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
