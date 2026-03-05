import { Component, signal, inject } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumService } from '../../service/album.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-albums-component',
  imports: [RouterLink],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css',
})
export class AlbumsComponent {
  albums = signal<Album[]>([]);
  loading = signal(true);
  error = signal('');

  private albumService = inject(AlbumService);

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums.set(albums);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Failed to load albums!");
        this.loading.set(false);
      }
    });
  }

  remove(id: number) {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums.update(albums => albums.filter(album => album.id !== id));
      },
      error: () => {
        this.error.set("Couldn't remove the album");
      }
    })
  }






}
