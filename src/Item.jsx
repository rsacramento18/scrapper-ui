import React from 'react';
import { useEffect } from 'react';

const Item = (props) => {
  useEffect(() => {
    console.log(props);
  })
  return (
    <div className='item'>
      <div className='image'>
        <img src={props.item.image} alt={props.item.image}/>
      </div>
      <div className='data'>
        <div className='title'>
          <h1>{props.item.name}</h1>
        </div>

        <div className='prices price'>
          <span>price {props.item.price}</span>
        </div>

        <div className='prices priceUnit'>
          <span>price per unit {props.item.priceUnit}</span>
        </div>
      </div>
      
    </div>
  );


}

export default Item;
