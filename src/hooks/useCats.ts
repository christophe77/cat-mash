import { useState } from 'react';
import { getCats } from '../api/cats';
import { Cat } from '../types/cat';

export default function useCats() {
  const cats = JSON.parse(localStorage.getItem('cats') || '[]');

  const getTotalVotes = () => {
    const catsCopy = [...cats];
    let votes = 0;
    catsCopy.forEach((cat: Cat) => {
      votes += cat.votes || 0;
    });
    return votes;
  };

  const [voteCount, setVoteCount] = useState<number>(getTotalVotes());

  function getRandomCats() {
    const randomCat1 = cats[Math.floor(Math.random() * cats.length)];
    const randomCat2 = cats[Math.floor(Math.random() * cats.length)];
    return [randomCat1, randomCat2];
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
    let votes = 0;
    const existingCats = JSON.parse(localStorage.getItem('cats') || '[]');
    existingCats.forEach((cat: Cat) => {
      votes += cat.votes || 0;
    });
    setVoteCount(votes);
  }

  const getTopCats = () => {
    const existingCats = JSON.parse(localStorage.getItem('cats') || '[]');
    const sortedCats = existingCats.sort((cat1: Cat, cat2: Cat) =>
      cat1.votes < cat2.votes ? 1 : cat1.votes > cat2.votes ? -1 : 0,
    );
    const sordetedAndSplittedArray = sortedCats.slice(0, 30);
    return sordetedAndSplittedArray;
  };
  return { cats, initializeCats, addVote, voteCount, getRandomCats, getTopCats };
}
