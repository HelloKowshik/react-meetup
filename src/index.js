import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favourites-context';

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <Router>
        <App />
      </Router>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
