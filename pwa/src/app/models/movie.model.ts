export interface MovieResponse {
  results: MovieItem[];
}

export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DisplayMovieItem {
  title: string;
  posterUrl: string;
}

export interface GetMoviesParams {
  page?: number;
  language?: string;
  region?: string;
}

export interface Configuration {
  images: {
    base_url: string;
  };
}
