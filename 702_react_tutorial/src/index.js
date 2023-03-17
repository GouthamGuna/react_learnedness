import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './BookList';
import Footer from './Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
    <Footer />
  </React.StrictMode>
);

