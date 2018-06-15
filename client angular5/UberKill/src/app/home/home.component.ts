import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formData = new FormData();
  constructor(public Http: HttpClient, public router: Router) { }

  ngOnInit() {
    { window.scrollTo(0,0)}
  }

  
}
