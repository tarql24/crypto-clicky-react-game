import React from 'react';
import './card2.css';

const Card2 = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img className="image-item" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card2;
