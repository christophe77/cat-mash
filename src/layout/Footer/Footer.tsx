import React from 'react';
import './footer.css';
import useCats from '../../hooks/useCats';

function Footer() {
  const { voteCount } = useCats();
  return (
    <footer className='footer'>
      <a href='/ranking' rel='noreferrer'>
        Voir les plus beaux chats ({voteCount} votes)
      </a>
    </footer>
  );
}

export default Footer;
