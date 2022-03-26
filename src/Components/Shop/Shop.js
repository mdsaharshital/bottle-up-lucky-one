import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import {FaRandom} from 'react-icons/fa';
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
        if( !cart.includes(selectedItem) ){
            if(cart.length>3){
                alert('OOPS!! You Cannot select more than 4 items')
            }
            else{
                const newCart =[...cart, selectedItem];
                setCart(newCart);
            }
        }
        
    }
    const removeFromCart =()=>{
        setCart([]);
    }
    const selectOne =()=>{
        if(cart.length>0){
            const value = Math.floor(Math.random()*cart.length);
            setCart([cart[value]]);
        }
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
                <button onClick={selectOne} className='chose-one-btn'>Choose 1 for me</button>
                <button onClick={removeFromCart} className='chose-again-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;