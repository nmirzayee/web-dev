import { Component, input, inject, signal } from '@angular/core';
import { AlbumService } from '../../service/album.service';
import { Album } from '../../model/album';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-albums-detail-component',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './albums-detail-component.html',
  styleUrl: './albums-detail-component.css',
})
export class AlbumsDetailComponent {
  album = signal<Album | null>(null);
  loading = signal(true);
  error = signal('');

  id = input.required<number>();
  private albumService = inject(AlbumService);

  ngOnInit(): void {
    this.albumService.getAlbum(this.id()).subscribe({
      next: (album) => {
        this.album.set(album);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Failed to load the album");
        this.loading.set(false);
      }
    });
  }

  save(newTitle: string) {
    const alb = this.album();
    if(!alb) return;

    const updated = {...alb, title: newTitle.trim()};

    this.albumService.updateAlbum(updated).subscribe({
      next: (saved) => this.album.set(saved),
      error: () => this.error.set("Couldn't save changes")
    });
  }

}
