import React from 'react';
import {AiOutlineShopping} from "react-icons/ai";
import Link from "next/link";
import {useStateContext} from "../../context/StateContext";
import {Cart} from "../../components";

const Navbar = (props) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext()
  
  return (
    <section className="navbar-container">
      <p className="logo">
        <Link href="/">Glass</Link>
      </p>
      
      <section className="flex gap-4">
        <p className="logo">
          <a href="https://glass.sanity.studio/desk" target="_blank">Sanity</a>
        </p>
        
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping/>
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </section>
      {showCart && <Cart/>}
    </section>
  )
};

export default Navbar;