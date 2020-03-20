import React from 'react';
import Swiper from 'react-id-swiper';

import Book from './Book';

import 'swiper/css/swiper.css';
import './BooksPage.css';
import backgroundResizer from '../lib/backgroundResizer';

const books = [
  {
    dayNum: 1,
    date: "21 mars",
    publisherName: "Le Bélial'",
    publisherUrl: "https://www.belial.fr/"
  },
  {
    dayNum: 2,
    date: "22 mars",
    publisherName: "Dystopia",
    publisherUrl: "https://www.dystopia.fr/"
  },
  {
    dayNum: 3,
    date: "23 mars",
    publisherName: "Velvet",
    publisherUrl: "https://www.editionsvelvet.com/"
  },
  {
    dayNum: 4,
    date: "24 mars",
    publisherName: "Scylla",
    publisherUrl: "https://editions.scylla.fr/"
  }
]
const backgroundImageFile = 'books-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile, window.innerWidth, window.innerHeight, window.devicePixelRatio
);

export default function BooksPage() {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 3
      }
    }
  };

  return (
    <div id="books" className="BooksPage page" style={{ backgroundImage }}>
      <div className="books">
        <Swiper {...params}>
          {books.map(book => <div key={book.dayNum}><Book {...book} /></div>)}
        </Swiper>
      </div>
    </div>
  );
}
