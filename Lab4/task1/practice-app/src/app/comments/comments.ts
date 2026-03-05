import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { LowerCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [LowerCasePipe, DatePipe],
  template: `
  <!-- using pipes for changing the value, but the original value will not change just the appearance in here will change -->
  <h2>Name: {{name | lowercase }}</h2>
  <!-- <p>{{date | date: 'medium'}}</p> -->
   <ul>
    <li>Building for the web is fantastic!</li>
    <li>The new template syntax is great</li>
    <li>I agree with the other comments!</li>
   </ul>
  `,
  styles: ``,
})

@Injectable ({
  providedIn: 'root', /* for the entire component */
})
export class Comments {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];
  getCars() {
    return this.cars;
  }
  getCar(id: number) {
    return this.cars[id];
  }
  name = "Tamana";
}
