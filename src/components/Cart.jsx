import React from 'react';
import Item from "./Item"

const Cart = (props) => {

  return (
    <div className="Cart">
      {props.cart.map(item => (
        <Item 
          key={item.id}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
          item={item}
        />
      ))}
  </div>
  )
}

export default Cart