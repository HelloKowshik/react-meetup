import React, { useRef } from 'react';
import styles from './NewMeetupForm.module.css';
import Card from '../ui/Card';
const NewMeetupForm = (props) => {
  let titleInputRef = useRef();
  let imageInputRef = useRef();
  let addressInputRef = useRef();
  let descriptionInputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    props.addMeetUp(meetupData);
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' name='title' required ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' name='image' required ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' name='address' required ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            name='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
