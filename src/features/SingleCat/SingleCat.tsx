import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { ThemeProvider } from '@emotion/react';
import { Cat } from '../../types/cat';
import useCats from '../../hooks/useCats';
import { BreakPointTheme } from '../../theme';

interface CatProps {
  cat: Cat;
  onVote: () => void;
  catPosition: 'left' | 'right';
}

export default function SingleCat({ cat, onVote, catPosition }: CatProps) {
  const { addVote } = useCats();
  return (
    <ThemeProvider theme={BreakPointTheme}>
    <Card
      className={`changeColorOnblur-${catPosition}`}
      sx={{
        width: '100%',
        cursor: 'pointer',
        textAlign: 'center',
        height: { xs: "25px", sm: "45vh", md: "100vh", bg: "100vh" },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
      }}
      onClick={() => {
        addVote(cat.id);
        onVote();
      }}
    >
      <CardContent>
        <img
          style={{ width: 150, height: 150, borderRadius: 400 / 2 }}
          src={cat.url}
          alt={cat.id}
        />
      </CardContent>
      <CardActions disableSpacing>
        <AddReactionIcon /> : {cat.votes}
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
