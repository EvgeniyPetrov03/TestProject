import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../shared/last-fm.service';
import { ActivatedRoute } from '@angular/router';
import { IAlbum } from '../types';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  currentGenre = '';

  get albums(): IAlbum[] {
    return this.lastFmService.filteredAlbums;
  }

  constructor(
    private lastFmService: LastFmService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.currentGenre = this.activatedRoute.snapshot.params.genre;
  }

  ngOnInit(): void {
    this.lastFmService.getAlbumsByGenre(this.currentGenre);
    this.lastFmService.getFavorites();
  }
}
