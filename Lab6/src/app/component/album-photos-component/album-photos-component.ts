import { Component, input, inject, signal } from '@angular/core';
import { AlbumService } from '../../service/album.service';
import { Photo } from '../../model/photo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-photos-component',
  imports: [RouterLink],
  templateUrl: './album-photos-component.html',
  styleUrl: './album-photos-component.css',
})
export class AlbumPhotosComponent {
  error = signal('');
  loading = signal(true);
  photos = signal<Photo[]>([]);

  id = input.required<number>();
  private albumService = inject(AlbumService);

  ngOnInit(): void {
    this.albumService.getAlbumPhotos(this.id()).subscribe({
      next: (photos) => {
        this.photos.set(photos);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Failed to load the album photos!");
        this.loading.set(false);
      }
    });
  }

}
