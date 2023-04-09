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
      
      {/*<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>*/}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        {/*<span className="cart-item-qty">{totalQuantities}</span>*/}
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      
      {showCart && <Cart/>}
    </section>
  )
};

export default Navbar;