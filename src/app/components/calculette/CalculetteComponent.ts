import { Component } from '@angular/core';
@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent {
  x: number;
  y: number;
  res: number;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.res = 0;
  }
  plus() {
    this.res = this.x + this.y;
    console.log(this.res)
  }
  moins() {
    this.res = this.x - this.y;
    console.log(this.res)
  }
  fois() {
    this.res = this.x * this.y;
    console.log(this.res)
  }
  divide() {
    if(this.y!=0){
      this.res = this.x / this.y
      console.log(this.res)
    }
    else{
      console.log("division impossible")
    }
    
    
  }
}
