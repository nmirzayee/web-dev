import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./components/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent],
  template: `
  <app-products/>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
