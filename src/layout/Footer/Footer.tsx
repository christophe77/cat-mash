import React from 'react';
import './footer.css';
import useCats from '../../hooks/useCats';

interface FooterProps {
  hasLink: boolean;
}

export default function Footer({ hasLink}: FooterProps) {
  const { voteCount } = useCats();
  return (
    <footer className='footer'>
      {hasLink && (
        <a href='/ranking' rel='noreferrer'>
          Voir les plus beaux chats ({voteCount} votes)
        </a>
      )}
      {!hasLink && 'CatMash'}
    </footer>
  );
}
