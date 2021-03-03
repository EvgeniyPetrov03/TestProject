import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../types';
import { LastFmService } from '../../shared/last-fm.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album: IAlbum;

  get isAddedToFavorites() {
    return this.lastFmService.isAddedToFavorites(this.album);
  }

  constructor(
    private lastFmService: LastFmService,
  ) {
  }

  ngOnInit(): void {
  }

  toggleFavourite() {
    if (this.isAddedToFavorites) {
      this.lastFmService.removeAlbumFromFavorites(this.album);
    } else {
      this.lastFmService.addAlbumToFavorites(this.album);
    }
  }
}
