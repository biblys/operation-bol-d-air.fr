import React from 'react';
import backgroundResizer from '../lib/backgroundResizer';
//@ts-ignore
import { Link } from 'react-scroll';

import './HomePage.css';

const backgroundImageFile = 'home-page-background.jpg';

export default function HomePage() {
  return (
    <div
      id="home"
      className="HomePage page"
    >
      <header className="header">
        <h1 className="page-title">L'Opération Bol d'air, c'est fini !</h1>
      </header>
    </div>
  );
}
