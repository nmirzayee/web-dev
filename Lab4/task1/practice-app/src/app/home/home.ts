import { Component, input, output } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <!-- interpolation -->
    <!-- conditional control flow -->
    <!-- Property binding: toggle button features, set images paths prgrammatically, and share values between components -->
    <!-- input: parent sends to the child -->
    <!-- output: child sends to the parent -->
     <!-- Deferrable views: some of the content don't need to be loaded right away for various reasons. -->
    @if(isServerRunning) {
      <h1>Hello {{myName("Tamana")}}, {{age + 1}}</h1>
      <p>Yes, the server is running</p>
    } @else {
      <h1>No, the server is not running</h1>
    }
    <img width="100px" [src]="imageUrl" alt="Beautiful sea">
    <h3>Users</h3>
    <ul>
      <!-- track => unique values that the users are identified with -->
      <!-- control flow -->
      @for(user of users; track user.id) {
        <li>Name: {{user.name}}, ID: {{user.id}}</li>
      }
    </ul>

    <div [contentEditable]="isEditable"></div>

    <button (click)="greet()">Login</button>

    <p>Job is  {{ occupation() }}</p>

    <button (click)="addItem()">Add</button>
    <button (click)="subract()">Subtract</button>

    
  `,
  styles: `
    h1 {
      font-size: 24px;
      color: #a144eb;
    }
    div {
      color: white;
      background-color: grey;
      height: 50px;
      width: 150px;
    }
  `,
})
export class Home {
  city: string = 'San Francisco';
  myName(name: string) {
    return name;
  }
  age: number = 20;
  isServerRunning: boolean = true;

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ]
  isEditable: boolean = true;
  imageUrl: string = "https://images.unsplash.com/photo-1770037367722-5444567fcb52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";

  greet() {
    alert("Hey Tamana! The button is clicked. ");
  }

  occupation = input<string>();


  addEventItem = output<string>();
  subtractEventItem = output<string>();
  addItem() {
    this.addEventItem.emit('🐢');
  }

  subract() {
    this.subtractEventItem.emit('');
  }
}
