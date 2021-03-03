import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres/genres.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [GenresComponent, AlbumsComponent, AlbumCardComponent, GenreCardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],

})
export class LastFmModule {
}
