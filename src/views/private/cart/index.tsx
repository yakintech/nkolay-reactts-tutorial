import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

function Cart() {

  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext)

  return (<>
    <button onClick={clearCart}>Clear Cart</button>
    <h1>Total Price: {getTotalPrice()}</h1>
    <ul style={{ display: 'flex', flexDirection: 'column' }}>
      {
        cart.map((item, index) => (
          <li>
            {item.name}
            <span> {item.price.toFixed(2)} * {item.quantity} = {(item.price * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))
      }
    </ul>
  </>)
}

export default Cart