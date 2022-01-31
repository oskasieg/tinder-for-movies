interface IFilm {
  id: number;
  imageUrl: string;
  title: string;
  summary: string;
  rating: number;
}

interface IFilms extends Array<IFilm> {}

export type { IFilm, IFilms };
