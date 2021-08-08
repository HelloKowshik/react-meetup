import React, { useContext } from 'react';
import FavoritesContext from '../../store/favourites-context';
import { Link } from 'react-router-dom';
import navStyle from './MainNav.module.css';

const MainNav = () => {
  const favContext = useContext(FavoritesContext);
  return (
    <header className={navStyle.header}>
      <div className={navStyle.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All MeetUps</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New MeetUp</Link>
          </li>
          <li>
            <Link to='/favourites'>
              My Favourites({favContext.totalFavorites})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
