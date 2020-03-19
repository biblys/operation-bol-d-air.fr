import React from 'react';
import Swiper from 'react-id-swiper';

import Book from './Book';

import 'swiper/css/swiper.css';
import './BooksPage.css';

const books = [
  {
    dayNum: 1,
    date: "20 mars",
    publisherName: "Le Bélial'",
    publisherUrl: "https://www.belial.fr/"
  },
  {
    dayNum: 2,
    date: "21 mars",
    publisherName: "Dystopia",
    publisherUrl: "https://www.dystopia.fr/"
  }
]

export default function BooksPage() {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      500: {
        slidesPerView: 3
      }
    }
  };

  return (
    <div id="books" className="BooksPage page">
      <div className="books">
        <Swiper {...params}>
          {books.map(book => <div key={book.dayNum}><Book {...book} /></div>)}
        </Swiper>
      </div>
    </div>
  );
}
