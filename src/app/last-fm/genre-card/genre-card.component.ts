import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {

  @Input() name = '';
  @Input() color = '#f0f0f0';
  @Input() imgUrl = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
