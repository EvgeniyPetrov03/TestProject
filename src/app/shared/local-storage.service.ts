import { Injectable } from '@angular/core';

export enum StorageKey {
  FAVOURITES = 'FAVOURITES'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key: StorageKey | string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: StorageKey | string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: StorageKey | string): void {
    localStorage.removeItem(key);
  }
}
