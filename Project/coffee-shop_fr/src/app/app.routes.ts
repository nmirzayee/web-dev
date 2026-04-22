import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Cart } from './pages/cart/cart';
import { Orders } from './pages/orders/orders';
import { Profile } from './pages/profile/profile';



export const routes: Routes = [
  
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'cart', component: Cart },
  { path: 'orders', component: Orders },
  { path: 'profile', component: Profile }
];