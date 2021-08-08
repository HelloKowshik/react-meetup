import React, { useContext } from 'react';
import FavoritesContext from '../../store/favourites-context';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';

const MeetupItem = (props) => {
  let { id, image, title, address, description } = props.meetup;

  const favContext = useContext(FavoritesContext);
  const itemIsFav = favContext.itemIsFavorite(id);

  const toggleFavItem = () => {
    if (itemIsFav) {
      favContext.removeFavorite(id);
    } else {
      favContext.addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavItem}>
            {itemIsFav ? 'Remove from Favourites' : 'To Favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
