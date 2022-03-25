import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [bottles, setBottles] =useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('Data.json')
        .then( res => res.json())
        .then( data => setBottles(data))
    },[]);
    const addToCart =(selectedItem)=>{
        const newCart =[...cart, selectedItem];
        setCart(newCart);
    }
    return (
        <div className='main'>
            
            <div className="menu-container">
                {
                   bottles.map( bottle => <Card addToCart={addToCart} bottle={bottle} key={bottle.id}/>)
                }
            </div>
            <div className="order-lists-container">
                
            <h2>Selected Bottles</h2>
                {
                    cart.map( item => <Cart key={item.id} cartBottle={item}></Cart>)
                }
            <button className='chose-one-btn'>Choose One</button>
            <button className='chose-again-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;