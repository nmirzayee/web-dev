import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  user = signal<any>({
    username: '',
    email: ''
  });

  errorMessage = '';
  editMode = false;

  ngOnInit(): void {
    // 🔥 FAKE DATA
    this.user.set({
      username: 'nematullah',
      email: 'nematullah@example.com'
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  save() {
    this.editMode = false;
    alert('Saved (fake)');
  }
}