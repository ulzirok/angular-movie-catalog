import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MovieDetails } from '../../components/movie-details/movie-details';
import { Observable, switchMap } from 'rxjs';
import { IMovie } from '../../models/movie.model';
import { MoviesService } from '../../services/movies.service.ts';
import { ActivatedRoute } from '@angular/router';
import { Loader } from '../../../../shared/ui/loader/loader';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-details-page',
  imports: [MovieDetails, Loader, AsyncPipe],
  templateUrl: './movie-details-page.html',
  styleUrl: './movie-details-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsPage {
  private moviesService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  movie$ = this.route.paramMap.pipe(
    switchMap(params =>
      this.moviesService.getMovieById(Number(params.get('id')))
    )
  );
}
