import {
  TopHero,
  PersonsList,
  TopComics,
  ComicList,
  TopFilms,
  FilmsList,
} from '../models';

import {
  topHeroes,
  personsList,
  topComics,
  ComicsList,
  filmsList,
  topFilms,
} from './constants';

export function getTopHeroes(): Promise<TopHero[]> {
  return new Promise(resolve => resolve(topHeroes));
}

export function getPersonsList(): Promise<PersonsList[]> {
  return new Promise(resolve => resolve(personsList));
}

export function getTopComics(): Promise<TopComics[]> {
  return new Promise(resolve => resolve(topComics));
}

export function getComicList(): Promise<ComicList[]> {
  return new Promise(resolve => resolve(ComicsList));
}

export function getTopFilms(): Promise<TopFilms[]> {
  return new Promise(resolve => resolve(topFilms));
}

export function getFilmsList(): Promise<FilmsList> {
  return new Promise(resolve => resolve(filmsList));
}
