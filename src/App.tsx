import React from 'react';
import { Box } from '@mui/material';
import useCats from './hooks/useCats';
import CatVote from './features/CatVote/CatVote';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

function App() {
  const { initializeCats } = useCats();
  initializeCats();

  return (
    <>
    <Header />
      <Box
        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <CatVote />
      </Box>
      <Footer />
    </>
  );
}

export default App;
