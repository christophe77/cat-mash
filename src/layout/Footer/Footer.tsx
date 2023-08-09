import React from 'react';
import './footer.css';
import useCats from '../../hooks/useCats';

function Footer() {
  const { getVotesCount } = useCats();
  return (
    <footer className='footer'>
      <a href='/ranking' rel='noreferrer'>
        Voir les plus beaux chats ({getVotesCount()} votes)
      </a>
    </footer>
  );
}

export default Footer;
