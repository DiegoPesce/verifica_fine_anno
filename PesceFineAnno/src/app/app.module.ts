import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { BachecaCommentiComponent } from './bacheca-commenti/bacheca-commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BachecaCommentiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
