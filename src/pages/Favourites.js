import React, { useContext } from 'react';
import FavoritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';
const FavouritesPage = () => {
  const favContext = useContext(FavoritesContext);
  let content;
  if (favContext.totalFavorites === 0) {
    content = `You don't Have any Favorites.`;
  } else {
    content = <MeetupList meetups={favContext.favorites} />;
  }
  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
};

export default FavouritesPage;
