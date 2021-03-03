import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from '../last-fm/genres/genres.component';
import { AlbumsComponent } from '../last-fm/albums/albums.component';

const routes: Routes = [
  {
    path: '',
    component: GenresComponent,
  },
  {
    path: 'albums/:genre',
    component: AlbumsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
