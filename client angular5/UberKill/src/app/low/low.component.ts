import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-low',
  templateUrl: './low.component.html',
  styleUrls: ['./low.component.css']
})
export class LowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    { 
      window.scrollTo(0,0)
    }
  }

}
