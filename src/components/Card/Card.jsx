import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1>{props.name}</h1>
        <h3>Status: {props.status}</h3>
        <h3>{props.description}</h3>
        <h3>Updated At: {props.updatedAt}</h3>
      </div>
    </>
  );
};
export default Card;
