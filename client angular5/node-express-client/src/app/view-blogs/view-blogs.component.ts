import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

class Blog {
  title: string;
  name: string;
  content: string;
  idblogs: number;
  pic: string;
}
@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {
  public blogs = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://txt-server.herokuapp.com/test/getBlogs')
      .subscribe((res: any) => {
        this.blogs = res;
        console.log(this.blogs);
      }, (err) => {
        console.log(err);
      });
  }

}
