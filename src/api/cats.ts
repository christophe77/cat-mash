import { cats } from './datas';
import { Cat } from '../types/cat';

export function getCats(): Cat[] {
  const catsWithVotes : Cat[] = [];
  const partialCats = [...cats];
  partialCats.forEach((cat: any) => {
    cat.votes = 0;
    catsWithVotes.push(cat as Cat);
  });
  return catsWithVotes;
}
