import React from 'react';
import './Card.css';
const Card = ({bottle}) => {
    console.log(bottle)
    const {name,price,picture} = bottle;
    return (
        <div className='card'>
            <img src= {picture}  alt="" />
            <div className="card-details">
                <h3>{name}</h3>
                <h5>Price : ${price}</h5>
                <button className='add-cart-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;