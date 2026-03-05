import { Component, signal, output } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { Home } from './home/home';
import { Comments } from './comments/comments';


@Component({
  selector: 'app-root',
 
  template: `
  <a routerLink="/">Home Page</a>
  <a routerLink="/user">User Page</a>
  <router-outlet/>
  <app-home [occupation]="name" (addEventItem)="addItem($event)" (subtractEventItem)="subtract()"></app-home>
  <p>🐢 all the way down {{myArray.length}}</p>

  <!-- sometimes the content is heavy or we don't need them yet, use defer. @defer (on viewport) means once the viewport is reached to the content, show it  -->
  @defer(on viewport) {
    <app-comments/>
  } @placeholder {
    <p>Future comments</p>
  } @loading (minimum 2s) {
    <p>Loading comments...</p>
  }

  <img ngSrc="https://images.unsplash.com/photo-1771600093904-3039b50203d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="Perfect Family" height="100px" width="100px" loading="lazy">

  


  `, imports: [Home, Comments, RouterOutlet, RouterLink],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-app');
  name = "Web Developer";
  myArray: Array<string> = new Array();
  addItem(name: string) {
    this.myArray.push(name);
  }
  subtract() {
    this.myArray.pop();
  }
}
