import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
import {
  DisplayMovieItem,
  GetMoviesParams,
  MovieItem,
  MovieResponse,
} from '../../models/movie.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class Screen2Service {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getPopularMovies(): Observable<DisplayMovieItem[]> {
    return this.configService.getConfig().pipe(
      switchMap((config) =>
        this.http
          .get<MovieResponse>(
            `https://api.themoviedb.org/3/movie/popular?api_key=${this.configService.apiKey}`
          )
          .pipe(withLatestFrom(of(config)))
      ),
      map(([popularMovies, config]) =>
        popularMovies.results.map((result) => ({
          title: result.title,
          posterUrl: `${config.images.base_url}w500${result.poster_path}`,
        }))
      )
    );
  }
}
