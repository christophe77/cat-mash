import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Cat } from '../../types/cat';
import useCats from '../../hooks/useCats';

interface catProps {
  cat: Cat;
  onVote : ()=>void
}

export default function SingleCat({ cat, onVote }: catProps) {
  const { addVote } = useCats();
  return (
    <Card
      sx={{ width: '180px', cursor: 'pointer', ml: '50px', mr: '50px' }}
      onClick={() => {addVote(cat.id); onVote();}}
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
  );
}
