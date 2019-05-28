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

onAddPost(post : HTMLInputElement){
  console.log(post.value)
  this.posts.push(new Post(post.value, null,null,null,null));
}
 onLogIn(u : HTMLInputElement, p: HTMLInputElement){
   localStorage.setItem('username', u.value);
   localStorage.setItem('password', p.value);
 }
}
