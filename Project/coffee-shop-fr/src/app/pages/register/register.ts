import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';
  passwordError = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  checkPasswords(): void {
    if (this.confirmPassword && this.password !== this.confirmPassword) {
      this.passwordError = 'Passwords do not match';
    } else {
      this.passwordError = '';
    }
  }

  register(): void {
    this.passwordError = '';
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.passwordError = 'Passwords do not match';
      return;
    }

    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.successMessage = 'Registration successful';
        this.errorMessage = '';

        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';

        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Registration failed';
        this.successMessage = '';
      }
    });
  }
}