import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

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

export default function BooksPage() {
  return (
    <div id="books" className="BooksPage page">
      <header className="header">
        <p>
          Pendant le grand confinement français, du 21 mars au 10 mai, un groupe
          d'éditeurs indépendant vous a offert un livre chaque jour (ou
          presque), soit au total 46 livres, pour vous soutenir durant cette
          période difficile.
        </p>
        <p>
          Si vous souhaitez les remercier et les soutenir à votre tour, vous
          pouvez leur envoyer un message, parler de leur livre autour de vous,
          les offrir à vos proches ou même acheter les versions papier pour
          votre bibliothèque !
        </p>
        <p>
          À cette fin, nous vous proposons ci-dessous pour chaque livre un
          bouton acheter qui vous permettra de trouver la librairie la plus
          proche de vous ayant le livre en stock, ou pouvant vous le commander.
        </p>
      </header>
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
