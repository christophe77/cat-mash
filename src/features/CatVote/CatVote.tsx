import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SingleCat from '../SingleCat/SingleCat';
import useCats from '../../hooks/useCats';
import { Cat } from '../../types/cat';

export default function CatVote() {
  const { getRandomCats } = useCats();
  const [randomCats, setRandomCats] = useState<Cat[]>(getRandomCats());

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <SingleCat cat={randomCats[0]} onVote={()=>setRandomCats(getRandomCats())}/>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SingleCat cat={randomCats[1]} onVote={()=>setRandomCats(getRandomCats())}/>
      </Grid>
    </Grid>
  );
}
