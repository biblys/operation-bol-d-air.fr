import React from 'react';
import Swiper from 'react-id-swiper';
import backgroundResizer from '../lib/backgroundResizer';

import Book from './Book';

import 'swiper/css/swiper.css';
import './BooksPage.css';

import books from '../books.json';

const backgroundImageFile = 'books-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile,
  window.innerWidth,
  window.innerHeight,
  window.devicePixelRatio
);

const initialSlide = books.findIndex(book => book.current);

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
            <div key={book.date}>
              <Book {...book} />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
