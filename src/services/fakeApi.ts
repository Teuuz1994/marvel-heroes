import { TopHero, PersonsList, TopComics, ComicList } from '../models';

import { topHeroes, personsList, topComics, ComicsList } from './constants';

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
