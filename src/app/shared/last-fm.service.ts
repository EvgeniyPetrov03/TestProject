import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAlbum, IAlbumsResponce } from '../last-fm/types';
import { LocalStorageService, StorageKey } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  private backendApiUrl = environment.backendApiUrl;
  private apiToken = environment.apiToken;
  private allAlbums: IAlbum[] = [];
  public filteredAlbums: IAlbum[] = [];
  public favoritesAlbums: IAlbum[] = [];

  get favoriteAlbumsCount(): number {
    return this.favoritesAlbums.length;
  }

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
  }

  getFavorites(): void {
    const albumsStr = this.localStorageService.getItem(StorageKey.FAVOURITES);
    if (albumsStr) {
      this.favoritesAlbums = JSON.parse(albumsStr) || [];
    }
  }

  saveFavorites(): void {
    const albumsJson = JSON.stringify(this.favoritesAlbums);
    this.localStorageService.setItem(StorageKey.FAVOURITES, albumsJson);
  }

  addAlbumToFavorites(album: IAlbum): void {
    this.favoritesAlbums.push(album);
    this.saveFavorites();
  }

  removeAlbumFromFavorites(album: IAlbum): void {
    this.favoritesAlbums = this.favoritesAlbums.filter((favoriteAlbum) => {
      return favoriteAlbum.name !== album.name;
    });
    this.saveFavorites();
  }

  isAddedToFavorites(album: IAlbum): boolean {
    return !!this.favoritesAlbums.find((favoriteAlbum) => {
      return favoriteAlbum.name === album.name;
    });
  }

  filterAlbums(value: string) {
    this.filteredAlbums = this.allAlbums.filter((album) => {
      return album.name.toLowerCase().includes(value);
    });
  }

  getAlbumsByGenre(genre: string): void {
    const params = {
      method: 'tag.gettopalbums',
      tag: genre,
      api_key: this.apiToken,
      format: 'json'
    };

    this.http.get<IAlbumsResponce>(this.backendApiUrl, {params})
      .subscribe((response) => {
        this.allAlbums = response.albums.album;
        this.filteredAlbums = response.albums.album;
      });
  }
}
