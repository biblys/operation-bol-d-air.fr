import React from 'react';

import './Book.css';
import mysteryBook from './mystery-book.jpg';

type BookProps = { 
  dayNum: number,
  date: string,
  publisherName: string,
  publisherUrl: string,
}

export default function Book({
  dayNum,
  date,
  publisherName,
  publisherUrl,
}: BookProps) {
  return (
    <div className="Book">
      <h1 className="date">{date}</h1>
      <div className="book-cover">
        <img src={mysteryBook} alt="Livre mystère" className="book-cover-image" />
      </div>
      <a className="button blue" href="#subscribe">
        <span aria-label="réveil" role="img">⏰</span>
        {' '}
        Me prévenir
      </a>
      <a className="button red" href={publisherUrl} target="_blank" rel="noopener noreferrer">
        Offert par{' '} 
        <strong>{publisherName}</strong>
      </a>
    </div>
  );
}