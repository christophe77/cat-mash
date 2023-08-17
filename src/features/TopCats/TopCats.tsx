import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import useCats from '../../hooks/useCats';
import { Cat } from '../../types/cat';

export default function TopCats() {
  const { getTopCats } = useCats();
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label='main cat list'>
        <List>
          {getTopCats().length > 0 && getTopCats().map((cat: Cat) => {
            <ListItem disablePadding key={cat.id}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${cat.votes} votes`} />
            </ListItem>;
          })}
        </List>
      </nav>
    </Box>
  );
}
