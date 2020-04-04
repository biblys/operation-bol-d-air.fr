import React from 'react';
import Swiper from 'react-id-swiper';
import moment from 'moment';
import 'moment/locale/fr';

import backgroundResizer from '../lib/backgroundResizer';

import Book from './Book';

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

const todaySlide = books.findIndex(({ startDate }) =>
  startDate.isSame(undefined, 'day')
);
const currentSlide = books.findIndex(book => book.current);
const initialSlide = todaySlide !== -1 ? todaySlide : currentSlide;

export default function BooksPage() {
  const params = {
    initialSlide,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    breakpoints: {
      500: {
        slidesPerView: 3
      }
    }
  };

  return (
    <div
      id="books"
      className="BooksPage page with-background-image"
      style={{ backgroundImage }}
    >
      <div className="books">
        <Swiper {...params}>
          {books.map(book => (
            <div key={book.startDate.format('YYYY-MM-DD')}>
              <Book {...book} />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
