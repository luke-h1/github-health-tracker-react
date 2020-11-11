import React from 'react';
import './Loading.scss';

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt=""
          className="loading-image"
        />
      </div>
    </>
  );
};
export default Loading;
