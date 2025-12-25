import { Component } from '@angular/core';
import { MoviesList } from '../../components/movies-list/movies-list';
import { MovieDetails } from '../../components/movie-details/movie-details';

@Component({
  selector: 'app-movies-page',
  imports: [MoviesList, MovieDetails],
  templateUrl: './movies-page.html',
  styleUrl: './movies-page.scss',
})
export class MoviesPage { }
