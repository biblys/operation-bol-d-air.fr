import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

import backgroundResizer from '../lib/backgroundResizer';

import BookComponent from './Book';

import 'swiper/css/swiper.css';
import './BooksPage.css';

import bookList from '../books.json';

moment.locale('fr');

const books = bookList.map(book => {
  return {
    ...book,
    startDate: moment(book.startDate),
    endDate: moment(book.endDate)
  };
});

const backgroundImageFile = 'books-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile,
  window.innerWidth,
  window.innerHeight,
  window.devicePixelRatio
);

export default function BooksPage() {
  return (
    <div
      id="books"
      className="BooksPage page with-background-image"
      style={{ backgroundImage }}
    >
      <div className="books">
        {books.map(book => (
          <div key={book.startDate.format('YYYY-MM-DD')}>
            <BookComponent {...book} />
          </div>
        ))}
      </div>
    </div>
  );
}
