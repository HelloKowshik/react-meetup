import React, { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
  const [modalOpen, setOpenModal] = useState(false);
  const handleDelete = () => {
    setOpenModal(true);
    console.log('Delete btn Clicked with Text:', props.text);
  };
  const closeModal = () => setOpenModal(false);
  return (
    <div className='card'>
      <h1>{props.text}</h1>
      <div className='actions'>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
};

export default Todo;
