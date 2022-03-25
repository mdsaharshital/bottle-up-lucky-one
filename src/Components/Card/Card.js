import React from 'react';
import './Card.css';
const Card = ({bottle}) => {
    console.log(bottle)
    // const{strCategory,strInstructions,strMealThumb,strMeal} = meal;
    const {id,name,price,picture} = bottle;
    return (
        <div className='card'>
            <img src= {picture}  alt="" />
            <div className="card-details">
                <h3>{name}</h3>
                <h5>Price : ${price}</h5>
            </div>
        </div>
    );
};

export default Card;