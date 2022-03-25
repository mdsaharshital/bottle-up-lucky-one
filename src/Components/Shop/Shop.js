import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shop.css';
const Shop = () => {
    const [bottles, setBottles] =useState([]);
    useEffect(()=>{
        fetch('Data.json')
        .then( res => res.json())
        .then( data => setBottles(data))
    },[])
    return (
        <div className='main'>
            
            <div className="menu-container">
                {
                   bottles.map( bottle => <Card bottle={bottle} key={bottle.id}/>)
                }
            </div>
            <div className="order-lists-container">
                {
                    
                }
            </div>
        </div>
    );
};

export default Shop;