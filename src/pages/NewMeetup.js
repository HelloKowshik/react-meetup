import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();
  const meetUpHandler = (meetupData) => {
    fetch(
      'https://react-meetup-2021-c5f06-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(() => history.replace('/'))
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetUp={meetUpHandler} />
    </section>
  );
};

export default NewMeetupPage;
