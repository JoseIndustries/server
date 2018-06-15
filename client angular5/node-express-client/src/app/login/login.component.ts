import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: ''
  };
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.http.post('http://localhost:8080/login', this.user)
      .subscribe((res) => {
        this.router.navigate(['view-blogs']);
      }, (err) => {
        console.log(err);
      });
  }

}
