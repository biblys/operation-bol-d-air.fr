import React from 'react';
import HomePage from '../HomePage/HomePage';
import BooksPage from '../BooksPage/BooksPage';
import SubscribePage from '../SubscribePage/SubscribePage';


import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <BooksPage/>
      <SubscribePage/>
    </div>
  );
}

export default App;
