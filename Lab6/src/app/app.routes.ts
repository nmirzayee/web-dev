import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { AboutComponent } from './component/about-component/about-component';
import { AlbumsComponent } from './component/albums-component/albums-component';
import { AlbumsDetailComponent } from './component/albums-detail-component/albums-detail-component';
import { AlbumPhotosComponent } from './component/album-photos-component/album-photos-component';
import { NotFoundComponent } from './component/not-found-component/not-found-component';

export const routes: Routes = [
  {path: 'home', title: 'Home', component: HomeComponent},
  {path: 'about', title: 'About', component: AboutComponent},
  {path: 'albums', title: 'Albums', component: AlbumsComponent},
  {path: 'albums/:id', title: 'Album-detail', component: AlbumsDetailComponent},
  {path: 'albums/:id/photos', title: 'Album-photos', component: AlbumPhotosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', title: 'Not Found', component: NotFoundComponent},
];
