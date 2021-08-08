import React from 'react';
import styles from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
