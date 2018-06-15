import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public items = [

  ];

  public contact = {
    firstName: '',
    lastName: '',
    NewUser: '',
    paragraph_text: '',
    displayEmail5: '',
    radio: '',
  };
  public value;
  public add;
  public sum = 0;
  public division;
  public radio;
  public rValues = [

  ]

  constructor(public http: HttpClient) {

  }

  ngOnInit() {
    {
      window.scrollTo(0, 0)
    }
  }

  ngIf() {

  }

  isChecked() {
    this.value = 1
  }

  isChecked2() {
    this.value = 2
  }

  isChecked3() {
    this.value = 3
  }

  isChecked4() {
    this.value = 4
  }

  login() {
    this.rValues.push(this.value)
    console.log(this.rValues)
    this.sum += this.value
    console.log(this.sum)
    this.division = this.sum / this.rValues.length
    console.log(this.division)
    this.http.post('http://localhost:8080/login', this.contact)
      .subscribe((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
        this.contact = {
          firstName: '',
          lastName: '',
          NewUser: '',
          paragraph_text: '',
          displayEmail5: '',
          radio: '',
        }
      });
  }
}
