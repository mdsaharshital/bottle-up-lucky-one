import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [bottles, setBottles] =useState([]);
    useEffect(()=>{
        fetch('Data.json')
        .then( res => res.json())
        .then( data => console.log(data))
    },[])
    return (
        <div>
            <h2>Im from shop compo</h2>
        </div>
    );
};

export default Shop;