import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PesceFineAnno';
  posts : Post[];

  constructor(public http : HttpClient) {}

  ngOnInit() {
    this.http.get<Post[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/annunci').subscribe((data) => {
      this.posts = data;
    });
  }

onAddPost(title : HTMLInputElement, text : HTMLInputElement){
  if(localStorage.getItem('logged') == 'true' && localStorage.getItem('username') != null){
    this.posts.push( new Post(title.value, Date.now().toString(), text.value, localStorage.getItem('username'), []) );
  }
}
 onLogIn(u : HTMLInputElement, p: HTMLInputElement){
   //request to db to verify user//
   localStorage.setItem('logged', 'true');
   localStorage.setItem('username', u.value);
 }
}
