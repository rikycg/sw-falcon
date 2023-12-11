import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '@swfalcon/swdata';

@Component({
  selector: 'sw-film',
  standalone: true,
  templateUrl: './sw-film.component.html',
  styleUrls: ['./sw-film.component.scss'],
  imports: [
    CommonModule,
  ]
})
export class SwFilmComponent implements OnInit {
  @Input() film: Film;

  imageUrl: string = '';

  ngOnInit(): void {
    this.setImageUrl();
  }

  setImageUrl() {
    this.imageUrl = `url(/assets/images/films/${this.film.id}.jpg)`;
  }
}