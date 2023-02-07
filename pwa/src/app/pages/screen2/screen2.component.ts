import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { DisplayMovieItem, MovieItem } from 'src/app/models/movie.model';
import { Screen2Service } from './screen2.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss'],
})
export class Screen2Component implements OnInit {
  movies$!: Observable<DisplayMovieItem[]>;

  constructor(private service: Screen2Service) {}

  ngOnInit(): void {
    this.movies$ = this.service.getPopularMovies();
  }
}
