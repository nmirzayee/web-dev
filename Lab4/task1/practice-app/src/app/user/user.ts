import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Comments } from '../comments/comments';
@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, FormsModule],
  template: `
  <hr>
  <br>
    <label for="framework">
      Favorite Framework:
      <input [(ngModel)]="framework" type="text" id="framework">
    </label>

    <p>You favorite Book is {{framework}}</p>
    <button (click)="showFramework()">Show</button>

    <hr>

    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label for="name">
        Name: 
        <input type="text" formControlName="name" id="name">
      </label>
      <label for="email">
        Email: 
        <input type="email" formControlName="email" id="email">
      </label>

      <button type="submit" [disabled]="!profileForm.valid" >Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{profileForm.value.name}}</p>
    <p>Email: {{profileForm.value.email}}</p>

    <hr>

    <p>Cars : {{comments.getCars()}}</p>
  `,
  styles: ``,
})
export class User {
  framework = '';

  showFramework() {
    alert(this.framework);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  })
   handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
   }

   comments = inject(Comments);
}
