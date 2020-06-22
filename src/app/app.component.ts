import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/userszz')
      .subscribe(data => {
        // console.log(data)
      })

      this.http.get('http://jsonplaceholder.typicode.com/posts/2')
      .subscribe(data => {
        // console.log(data)
      })

      this.http.get('http://jsonplaceholder.typicode.com/comments')
      .subscribe(data => {
        // console.log(data)
      })
  }

}
