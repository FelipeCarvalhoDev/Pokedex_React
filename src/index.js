import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';
import Filter from './components/Filter';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Filter />
  </React.StrictMode>,
  document.getElementById('root')
);