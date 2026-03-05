import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-about-component',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="about-card">
      <div class="top-content">
        <h2 class="about-title">About This Application</h2>

        <p class="about-description">
          Album Browser is a web application built with Angular. It allows users to browse albums, view detailed album information, and explore photos in a clean and user-friendly interface.
        </p>
      </div>

      <div>
        <h3 class="more-title">Developer Information</h3>
        <div class="developer-card">
          <p><span class="bold-text">Name:</span> Nematullah Mirzayee</p>
          <p><span class="bold-text">Course:</span> Web Development</p>
          <p><span class="bold-text">Technology:</span> Angular 17+, TypeScript, HttpClient</p>
          <p><span class="bold-text">API Used:</span> JSONPlaceholder</p>
        </div>
      </div>

      <p class="note">
        This project demonstrates routing, HTTP requests, services, and component-based architecture in Angular.
      </p>

      <div>
        <a class="home-link" routerLink="/home" routerLinkActive="active">← Back to Home</a>
      </div>
    </div>

  `,
  styleUrl: './about-component.css',
})
export class AboutComponent {

}
