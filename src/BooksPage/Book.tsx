import React from 'react';

import './Book.css';
import mysteryBook from './mystery-book.jpg';

type BookProps = { 
  dayNum: number,
  date: string,
  publisherName: string,
  publisherUrl: string,
  coverImageUrl?: string,
  altText?: string,
  paperEan?: string,
  downloadLink?: string,
}

export default function Book({
  date,
  publisherName,
  publisherUrl,
  coverImageUrl,
  altText,
  downloadLink
}: BookProps) {
  return (
    <div className="Book">
      <h1 className="date">{date}</h1>
      <div className="book-cover">
        {
          coverImageUrl ? 
          <img src={coverImageUrl} alt={altText} className="book-cover-image" /> :
          <img src={mysteryBook} alt="Livre mystère" className="book-cover-image" />
        }
      </div>
      {
        downloadLink ?
        <a className="button green" href={downloadLink}  target="_blank" rel="noopener noreferrer">
          <span aria-label="cadeau" role="img">🎁</span>
          {' '}
          <strong>Télécharger</strong>
        </a> :
        <a className="button blue" href="#subscribe">
        <span aria-label="réveil" role="img">⏰</span>
          {' '}
          Me prévenir
        </a>
      }
      <a className="button red" href={publisherUrl} target="_blank" rel="noopener noreferrer">
        Offert par{' '} 
        <strong>{publisherName}</strong>
      </a>
    </div>
  );
}