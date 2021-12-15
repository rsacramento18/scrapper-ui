import React from 'react';

const Item = (props) => {
  return (
    <div className='item'>
      <div className='data'>
        <div className='name'>
          <h3>{props.item.supermarket}</h3>
        </div>
        <div className='name'>
          <h3>{props.item.name}</h3>
        </div>

        <div className='prices price'>
          <h4>Price {props.item.price}</h4>
        </div>

        <div className='prices priceUnit'>
          <h4>price per unit {props.item.priceUnit}</h4>
        </div>
      </div>
      <div className='image'>
        <img src={props.item.image} alt={props.item.image}/>
      </div>
    </div>
  );
}

export default Item;
