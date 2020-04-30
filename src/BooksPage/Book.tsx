import React from 'react';
import { Book } from './Book.type';

import './Book.css';
import mysteryBook from './mystery-book.jpg';

export default function({
  startDate,
  endDate,
  coverImageUrl,
  altText,
  paperEan
}: Book) {
  const buyLink = `https://www.placedeslibraires.fr/livre/${paperEan}/`;
  const started = startDate.isSameOrBefore();

  return (
    <div className="Book">
      <div className="book-cover">
        {coverImageUrl && started ? (
          <img src={coverImageUrl} alt={altText} className="book-cover-image" />
        ) : (
          <img
            src={mysteryBook}
            alt="Livre mystère"
            className="book-cover-image"
          />
        )}
      </div>
      {paperEan ? (
        <a
          className="button blue"
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Télécharger ${altText}`}
        >
          <span aria-label="cadeau" role="img">
            ♥️
          </span>{' '}
          <strong>Acheter</strong>
        </a>
      ) : null}
    </div>
  );
}
