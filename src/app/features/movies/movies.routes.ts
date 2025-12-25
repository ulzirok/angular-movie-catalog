import { Routes } from '@angular/router';
import { MoviesPage } from './pages/movies-page/movies-page';
import { MovieDetailsPage } from './pages/movie-details-page/movie-details-page';

export const MOVIES_ROUTES: Routes = [
  {
    path: '',
    component: MoviesPage,
  },
  {
    path: ':id',
    component: MovieDetailsPage
  }
];