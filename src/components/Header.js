import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Basket from './Basket';

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Home staff</span>
            <ul className='nav'>
                <li>About</li>
                <li>Contacts</li>
                <li>Personal area</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen ? 'active' : ''}`} />

            { cartOpen && (
                <Basket items={props.basket} onDelete={props.onDelete}/>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
