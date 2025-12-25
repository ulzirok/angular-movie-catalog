import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Search } from '../search/search';
import { MovieCard } from '../movie-card/movie-card';
import { MovieDetails } from '../movie-details/movie-details';
import { MoviesService } from '../../services/movies.service.ts';
import { IMovie } from '../../models/movie.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { catchError, map, Observable, of } from 'rxjs';
import { Loader } from '../../../../shared/ui/loader/loader';
import { SearchPipePipe } from '../../../../shared/pipes/search-pipe-pipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-movies-list',
  imports: [Search, MovieCard, MovieDetails, CommonModule, AsyncPipe, Loader, SearchPipePipe, RouterLink],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesList implements OnInit {
  private moviesService = inject(MoviesService);
  public movies$!: Observable<IMovie[]>;
  public onSearchTerm?: string = '';
  public isError = false;

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies(1).pipe(
      map((res) => res.results),
      catchError(() => {
        this.isError = true;
        return of([]);
      })
    );

  }
}
