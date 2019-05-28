import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input() posts : Post[];

  constructor() {}

  ngOnInit() {
  }

onAddComment(title : HTMLInputElement, text : HTMLInputElement, post : Post){
    if(localStorage.getItem('logged') == 'true' && localStorage.getItem('username') != null){
      post.addRisposta( title.value, Date.now().toString(), text.value, localStorage.getItem('username'), [] );
    }
  }
}
