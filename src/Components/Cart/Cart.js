import React from 'react';
import './Cart.css'
const Cart = ({cartBottle}) => {
    const{picture, name}= cartBottle;
    return (
        <div>
            <div className="cart-area">
                <img src={picture} alt="" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Cart;