import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linear-kinematics',
  templateUrl: './linear-kinematics.component.html',
  styleUrls: ['./linear-kinematics.component.css']
})
export class LinearKinematicsComponent implements OnInit {
  public iVelocity: any;
  public fVelocity: any;
  public iAcceleration: any;
  public fAcceleration: any;
  public time: any;
  public fDistance: any;
  public iDistance: any;
  public constantAccel: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  find_iVelocity(){
    if (this.fVelocity && this.fAcceleration && this.time){

    }
    
    if (this.fVelocity && this.fAcceleration && this.iDistance && this.fDistance){

    }
  }

  find_fVelocity(){

  }

  find_iAcceleration(){

  }

  find_fAcceleration(){

  }

  find_time(){

  }

  find_distance(){

  }

  find_displacement(){

  }
}
