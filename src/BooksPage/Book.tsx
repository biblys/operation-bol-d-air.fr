import React from 'react';
//@ts-ignore
import { Link } from 'react-scroll';

import { Moment } from 'moment';

import './Book.css';
import mysteryBook from './mystery-book.jpg';

type BookProps = {
  startDate: Moment;
  endDate: Moment;
  publisherName: string;
  publisherUrl: string;
  coverImageUrl?: string;
  altText?: string;
  paperEan?: string;
  downloadLink?: string;
  current?: boolean;
};

export default function Book({
  startDate,
  endDate,
  publisherName,
  publisherUrl,
  coverImageUrl,
  altText,
  downloadLink
}: BookProps) {
  const downloadLinkWithTags = `${downloadLink}?utm_source=operation-bol-d-air&utm_medium=clic&utm_campaign=bol-d-air-${startDate
    .format('YYYY-MM-DD')
    .replace(' ', '-')}`;

  const ended = endDate.isBefore(undefined, 'day'); // If end date is before today
  const started = startDate.isSameOrBefore();
  const publisherButtonText = ended ? 'Vous a été offert par' : 'Offert par';

  return (
    <div className="Book">
      <h1 className="date">{startDate.format('D MMMM')}</h1>
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
      {publisherUrl ? (
        <a
          className="button red"
          href={publisherUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {publisherButtonText} <strong>{publisherName}</strong>
        </a>
      ) : (
        <span className="button red">
          {publisherButtonText} <strong>{publisherName}</strong>
        </span>
      )}
    </div>
  );
}
