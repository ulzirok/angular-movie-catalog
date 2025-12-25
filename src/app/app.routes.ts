import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () => import('../app/features/movies/movies.routes').then((m) => m.MOVIES_ROUTES)
  }
];
