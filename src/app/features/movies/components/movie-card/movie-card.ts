import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCard {
  @Input() movie?: IMovie;

  getPosterUrl(imgPath?: string): string {
    return `https://image.tmdb.org/t/p/w500${imgPath}`;
  }
}
