import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../../features/movies/models/movie.model';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {
  transform(movies: IMovie[], search?: string): IMovie[] {
    if (!movies || !search) {
      return movies;
    }
    return movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
  }
}


