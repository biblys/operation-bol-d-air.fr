import React from 'react';
import HomePage from '../HomePage/HomePage';
import BooksPage from '../BooksPage/BooksPage';
import AboutPage from '../AboutPage/AboutPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <BooksPage/>
      <AboutPage/>
    </div>
  );
}

export default App;
