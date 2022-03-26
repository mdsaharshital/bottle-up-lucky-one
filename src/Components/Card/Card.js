import React from 'react';
import './Card.css';
import {BsFillCartPlusFill} from 'react-icons/bs';
const Card = ({bottle,addToCart}) => {
    // console.log(bottle)
    const {name,price,picture} = bottle;
    return (
        <div className='card'>
            <img src= {picture}  alt="" />
            <div className="card-details">
                <h3>{name}</h3>
                <h5>Price : ${price}</h5>
                <button onClick={()=> addToCart(bottle)} className='add-cart-btn'>Add to Cart<BsFillCartPlusFill size={25} className='cart-icon'/> </button>
            </div>
        </div>
    );
};

export default Card;