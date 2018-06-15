import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide5',
  templateUrl: './slide5.component.html',
  styleUrls: ['./slide5.component.css']
})
export class Slide5Component implements OnInit {
  public value;
  public add;
  public sum = 0;
  public division;
  public rValues= [ 
 
  ]
  

  constructor() { }

  ngOnInit() {
  }
  
  isChecked() {
    this.value= 1
  }
  isChecked2() {
    this.value=2
  }
  isChecked3() {
    this.value=3
  }
  isChecked4() {
    this.value=4 
  }
  onClickMe() {
    this.rValues.push(this.value)
    console.log(this.rValues)
    this.sum += this.value
   console.log(this.sum)
   this.division = this.sum/this.rValues.length
   console.log(this.division)
    
  }
}


