import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../../shared/last-fm.service';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  filterControl: FormControl = new FormControl('');
  isShowHeader = false;

  get favoriteAlbumsCount(): number {
    return this.lastFmService.favoriteAlbumsCount;
  }

  constructor(
    private lastFmService: LastFmService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      this.isShowHeader = (this.router.url !== '/');
    });

    this.filterControl.valueChanges.subscribe((value: string) => {
      this.lastFmService.filterAlbums(value.toLowerCase());
    });
  }

}
