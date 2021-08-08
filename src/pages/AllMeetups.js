import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetUps] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-meetup-2021-c5f06-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const dataArr = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          dataArr.push(meetup);
        }
        setIsLoading(false);
        setMeetUps(dataArr);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Meetups Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
