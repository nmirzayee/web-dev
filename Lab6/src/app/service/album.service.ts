import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../model/album';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  http = inject(HttpClient);

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number):  Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }
  
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`)
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, {
      title: album.title
    });
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}
