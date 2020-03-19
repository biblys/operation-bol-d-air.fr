import React from 'react';

import './HomePage.css';

export default function HomePage() {
  return (
    <div id="home" className="HomePage page">
      <header className="header">
        <h1 className="page-title">Opération Bol d'air</h1>
        <p className="page-subtitle">- spécial confinement -</p>
      </header>

      <p className="catchline">
        <span className="catchline-highlight">
          Un livre numérique<br/>
          offert chaque jour<br />
          pour ne pas devenir<br />
          complètement chèvre !
        </span>
      </p>

      <footer className="footer">
        <a href="#books">
          Découvrir les livres{' '}
          <span role="img" aria-label="down">👇</span>
        </a>
      </footer>
    </div>
  );
}
