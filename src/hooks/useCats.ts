import { getCats } from '../api/cats';
import { Cat } from '../types/cat';

export default function useCats() {
  const cats = JSON.parse(localStorage.getItem('cats') || '[]');

  function getRandomCats(){
    const randomCat1 = cats[Math.floor(Math.random() * cats.length)];
    const randomCat2 = cats[Math.floor(Math.random() * cats.length)];
    return [randomCat1, randomCat2]
  }
  
  async function initializeCats() {
    const existingCats = JSON.parse(localStorage.getItem('cats') || '[]');
    if (existingCats.length === 0) {
      const initialCats = await getCats();
      initialCats.forEach((cat: Cat) => {
        cat.votes = 0;
      });
      localStorage.setItem('cats', JSON.stringify(initialCats));
    }
  }
  
  function addVote(catID: string) {
    const catsCopy = [...cats];
    catsCopy.find((cat: Cat) => cat.id === catID).votes += 1;
    localStorage.setItem('cats', JSON.stringify(catsCopy));
  }

  function getVotesCount() {
    let votes = 0;
    cats.forEach((cat: Cat) => {
      votes += cat.votes || 0;
    });
    return votes;
  }

  return { cats, initializeCats, addVote, getVotesCount, getRandomCats };
}
