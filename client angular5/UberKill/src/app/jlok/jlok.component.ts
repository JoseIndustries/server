import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jlok',
  templateUrl: './jlok.component.html',
  styleUrls: ['./jlok.component.css']
})
export class JlokComponent implements OnInit {

  public formData = new FormData();
  constructor(public Http: HttpClient, public router: Router) { }

  ngOnInit() {
    // this.Http.get('http://localhost:3000/')
    // .subscribe((Response:any)=>{
    //   console.log(Response);
    // })
  }
  submit() {
    console.log('hello')
    this.Http.post('http://localhost:8080/sendImage', this.formData)
    .subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);

    })
  }
  onSelect(e) {
    console.log(e.srcElement.files[0]);
    let formData = new FormData();
    this.formData.append('file', e.srcElement.files[0]);


  }
   

    


  }
