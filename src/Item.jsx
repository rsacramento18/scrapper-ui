import React from 'react';

const Item = (props) => {
  return (
    <div className='item'>
      <div className='image'>
        <img src={props.image} alt={props.image}/>
      </div>
      <div className='data'>
        <div className='title'>
          <h1>{props.title}</h1>
        </div>

        <div className='prices price'>
          <span>price {props.price}</span>
        </div>

        <div className='prices priceUnit'>
          <span>price per unit {props.priceUnit}</span>
        </div>
      </div>
      
    </div>
  );


}

export default Item;
