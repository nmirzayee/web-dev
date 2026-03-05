import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// to enable routing in standalone angular
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  // providers are services Angular makes availabe globally
  providers: [
    provideRouter(routeConfig) // where the routes go
  ]
})
  .catch(err => console.error(err));
