import React from 'react';
import '../styles/card.style.css';

export const Card = (props) => (
   <div className='card-container'>
        <img alt='chuck' 
        className='image'
        src={`https://i.ibb.co/r4rjNBw/chuck.png`} />
        <h2 className='info'> {props.fact.value} </h2>
    </div>
)