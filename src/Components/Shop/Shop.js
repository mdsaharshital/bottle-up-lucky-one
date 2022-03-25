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
        console.log();
        if( !cart.includes(selectedItem)){
            const newCart =[...cart, selectedItem];
            setCart(newCart);
        }
    }
    const removeFromCart =()=>{
        setCart([]);
    }
    const selectOne =()=>{
        // const value = Math.floor(Math.random() * cart.length);
        const value = Math.floor(Math.random()*cart.length);
        console.log(value);
        // if( value>1 && value<10){
        //     const oneitem = cart.map(item=> item === value);
        //     console.log(oneitem);
        // setCart([value])
        // }
        // setCart([value])
        // const oneCart =;
        console.log(cart[value]);
        console.log(cart);
        setCart([cart[value]]);

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
            <button onClick={selectOne} className='chose-one-btn'>Choose One</button>
            <button onClick={removeFromCart} className='chose-again-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;