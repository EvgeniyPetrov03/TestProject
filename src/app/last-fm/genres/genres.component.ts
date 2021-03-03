import { Component, OnInit } from '@angular/core';

const genres = [
  {
    name: 'Rock',
    color: '#ec1e32',
    imgUrl: '../assets/images/genres/rock.jpg',
  },
  {
    name: 'Pop',
    color: '#c3f0c8',
    imgUrl: '../assets/images/genres/pop.png',
  },
  {
    name: 'Hip-hop',
    color: '#f59c23',
    imgUrl: '../assets/images/genres/hip-hop.jpg',
  },
  {
    name: 'Indie',
    color: '#4100f5',
    imgUrl: '../assets/images/genres/indie.jpg',
  },
  {
    name: 'Electro',
    color: '#f59c23',
    imgUrl: '../assets/images/genres/electro.jpg',
  },
  {
    name: 'Techno',
    color: '#9c9c9c',
    imgUrl: '../assets/images/genres/techno.jpg',
  }
];

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres = genres;

  constructor() {
  }

  ngOnInit(): void {
  }
}
