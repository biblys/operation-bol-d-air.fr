import React from 'react';
import backgroundResizer from '../lib/backgroundResizer';
//@ts-ignore
import { Link } from 'react-scroll';

import './HomePage.css';

const backgroundImageFile = 'home-page-background.jpg';
const backgroundImage = backgroundResizer(
  backgroundImageFile,
  window.innerWidth,
  window.innerHeight,
  window.devicePixelRatio
);

export default function HomePage() {
  return (
    <div id="home" className="HomePage page" style={{ backgroundImage }}>
      <header className="header">
        <h1 className="page-title">Opération Bol d'air</h1>
        <p className="page-subtitle">- spécial confinement -</p>
      </header>

      <p className="catchline">
        <span className="catchline-highlight">
          Un ebook gratuit chaque jour
          <br />
          pour ne pas devenir chèvre !
        </span>
      </p>

      <footer id="home-footer" className="footer">
        <Link to="home-footer" smooth={true} duration={250}>
          Découvrir les livres{' '}
          <span role="img" aria-label="down">
            👇
          </span>
        </Link>
      </footer>
    </div>
  );
}
