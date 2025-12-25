import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMovieDetails } from '../../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetails {
  @Input() movie!: IMovieDetails;
}
