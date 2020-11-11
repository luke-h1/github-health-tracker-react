import React from 'react';
import './Card.scss';


const Card = (props) => { 
  return ( 
    <>
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
    </>
  )
}
export default Card;