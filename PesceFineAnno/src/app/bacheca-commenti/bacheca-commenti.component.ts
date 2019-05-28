import { Component, OnInit, Input } from '@angular/core';
import { Risposte } from './risposte.model'

@Component({
  selector: 'app-bacheca-commenti',
  templateUrl: './bacheca-commenti.component.html',
  styleUrls: ['./bacheca-commenti.component.css']
})
export class BachecaCommentiComponent implements OnInit {

@Input() risposte : Risposte[];

  constructor() { }

  ngOnInit() {
  }

  onAddComment(title : HTMLInputElement, text : HTMLInputElement){
    if(localStorage.getItem('logged') == 'true' && localStorage.getItem('username') != null){
      this.risposte.push( new Risposte(title.value, Date.now().toString(), text.value, localStorage.getItem('username'), []) );
    }
  }
}
