import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useCats from './hooks/useCats';
import CatVote from './features/CatVote/CatVote';
import TopCats from './features/TopCats/TopCats';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

function App() {
  const { initializeCats } = useCats();
  useEffect(() => {
    initializeCats();
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Header hasButtonReturn={false}/>
            <CatVote />
            <Footer hasLink={true} />
          </>
        }
      />
      <Route
        path='/ranking'
        element={
          <>
            <Header hasButtonReturn={true}/>
            <TopCats />
            <Footer hasLink={false}/>
          </>
        }
      />
    </Routes>
  );
}

export default App;
