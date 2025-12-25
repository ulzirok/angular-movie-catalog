import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { IMovieDetails, IMoviesResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  getMovies(page: number = 1): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(`${environment.apiUrl}/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${environment.token}`,
          Accept: 'application/json'
        }
      }
    ).pipe(
      catchError(() => {
        return throwError(() => new Error('Failed to load movies'));
      })
    );
  }

  getMovieById(movieId: number): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${environment.apiUrl}/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${environment.token}`,
          Accept: 'application/json'
        }
      }
    );
  }
}
