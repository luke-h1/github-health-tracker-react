import React, { useState, useEffect } from 'react';
import './Status.scss';

const Status = () => {
  return (
    <>
      <div className="status-wrapper">
        <div className="card">
          <h1>service title</h1>
          <ul className="list">
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
          </ul>
          {/* results go here */}
        </div>
        <div className="card">
          <h1>service title</h1>
          <ul className="list">
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
          </ul>
          {/* results go here */}
        </div>
        <div className="card">
          <h1>service title</h1>
          <ul className="list">
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
            <li className="collection-item">
              component: healthy or not result here
            </li>
          </ul>
          {/* results go here */}
        </div>
      </div>
    </>
  );
};
export default Status;
