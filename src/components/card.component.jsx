import React from 'react';
import '../styles/card.style.css';
import Image from '../img/chuck.png';

export const Card = (props) => (
   <div className='card-container'>
        <img alt='chuck' 
        className='image'
        src={Image} />
        <h2 className='info'> {props.fact.value} </h2>
    </div>
)