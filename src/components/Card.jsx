import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <h1>{data.advice}</h1>
      <button>Next Advice</button>
    </div>
  );
};

export default Card;
