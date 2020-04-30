import React from 'react';
//@ts-ignore
import { Link } from 'react-scroll';
import { Book } from './Book.type';

import './Book.css';
import mysteryBook from './mystery-book.jpg';

export default function({
  startDate,
  endDate,
  publisherName,
  publisherUrl,
  coverImageUrl,
  altText,
  downloadLink
}: Book) {
  const downloadLinkWithTags = `${downloadLink}?utm_source=operation-bol-d-air&utm_medium=clic&utm_campaign=bol-d-air-${startDate
    .format('YYYY-MM-DD')
    .replace(' ', '-')}`;

  const ended = endDate.isBefore(undefined, 'day'); // If end date is before today
  const started = startDate.isSameOrBefore();

  return (
    <div className="Book" aria-hidden={ended}>
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
      {ended ? (
        <span className="button grey">
          Trop tard{' '}
          <span role="img" aria-label="OMG">
            😱
          </span>
        </span>
      ) : downloadLink && started ? (
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
      ) : (
        <Link to="subscribe" smooth={true} duration={250}>
          <span className="button blue">
            <span aria-label="réveil" role="img">
              ⏰
            </span>{' '}
            Me prévenir
          </span>
        </Link>
      )}
    </div>
  );
}
