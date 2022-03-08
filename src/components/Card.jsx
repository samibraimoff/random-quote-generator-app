import React from 'react';
import './Card.css';

const Card = ({ data, onClick }) => {
  return (
    <div className='card'>
      <h1>{data.advice}</h1>
      <button onClick={onClick}>Next Advice</button>
    </div>
  );
};

export default Card;
