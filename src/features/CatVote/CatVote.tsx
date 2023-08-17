import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SingleCat from '../SingleCat/SingleCat';
import useCats from '../../hooks/useCats';
import { Cat } from '../../types/cat';
import './CatVote';

export default function CatVote() {
  const { getRandomCats } = useCats();
  const [randomCats, setRandomCats] = useState<Cat[]>(getRandomCats());

  return (
    <div className='centered'>
      <Grid container direction='row' justifyContent='space-around' alignItems='center'>
        <Grid item xs={12} sm={6}>
          <SingleCat cat={randomCats[0]} onVote={() => setRandomCats(getRandomCats())} catPosition={"left"}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SingleCat cat={randomCats[1]} onVote={() => setRandomCats(getRandomCats())} catPosition={"right"}/>
        </Grid>
      </Grid>
    </div>
  );
}
