import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Configuration } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config!: Configuration;
  public apiKey = '556f719f215916563e28a4f255d26cf9';

  constructor(private http: HttpClient) {}

  getConfig(): Observable<Configuration> {
    if (this.config) {
      return of(this.config);
    } else {
      return this.http
        .get<Configuration>(
          `https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`
        )
        .pipe(tap((config) => (this.config = config)));
    }
  }
}
