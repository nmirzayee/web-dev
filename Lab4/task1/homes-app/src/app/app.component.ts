import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component"; /* stay at the current folder => ./ */
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, /* gives us more features */
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`, /* html template */
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule], /* css styles, because we have need the RouterModule in our HTML, that's why we also put it here */
})
/* component class that is writen in typeScript */
export class AppComponent {
  title = 'homes';
}
