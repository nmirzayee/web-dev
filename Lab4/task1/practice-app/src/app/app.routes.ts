import { Routes } from '@angular/router';
import { User } from './user/user';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '', // starts at this page
    title: 'App Home Page',
    component: Home
  },
  {
    path: 'user',
    title: 'User Page',
    component: User
  }
];
