import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home-component',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="home-card">
      <h2 class="home-title">Welcome to Album Browser</h2>

      <p class="home-description">
        Discover albums, explore detailed information, and browse beautiful
        photos in a simple and intuitive interface.
      </p>

      <a class="albums-link" routerLink="/albums" routerLinkActive="active">Browse Albums →</a>
    </div>
  `,
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
