export interface IMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
export interface IMovieDetails {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}