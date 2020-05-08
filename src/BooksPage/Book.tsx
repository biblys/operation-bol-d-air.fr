import React from 'react';
import { Book } from './Book.type';

import './Book.css';
import mysteryBook from './mystery-book.jpg';

export default function({
  startDate,
  endDate,
  downloadLink,
  coverImageUrl,
  altText,
  paperEan
}: Book) {
  const buyLink = `https://www.placedeslibraires.fr/livre/${paperEan}/`;
  const started = startDate.isSameOrBefore()

  const ended = endDate.isBefore(undefined, 'day'); // If end date is before today
  const downloadLinkWithTags = `${downloadLink}?utm_source=operation-bol-d-air&utm_medium=clic&utm_campaign=bol-d-air-${startDate
    .format('YYYY-MM-DD')
    .replace(' ', '-')}`;


  return (
    <div className="Book">
      <div className="book-cover">
        {coverImageUrl ? (
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
          aria-label={`Acheter ${altText}`}
        >
          <span aria-label="cœur" role="img">
            ♥️
          </span>{' '}
          <strong>Acheter</strong>
        </a>
      ) : null}
      {started && !ended ? (
        <a
          className="button green"
          href={downloadLinkWithTags}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Télécharger ${altText}`}
        >
          <span aria-label="cadeau" role="img">
            🎁
          </span>{' '}
          <strong>Télécharger</strong>
        </a>
      ) : null}
    </div>
  );
}
