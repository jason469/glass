import React from 'react';
import {AiOutlineShopping} from "react-icons/ai";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <section className="navbar-container">
      <p className="logo">
        <Link href="/">Glass</Link>
      </p>
      
      {/*<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>*/}
      <button type="button" className="cart-icon">
        <AiOutlineShopping/>
        {/*<span className="cart-item-qty">{totalQuantities}</span>*/}
        <span className="cart-item-qty">50</span>
      </button>
      
      {/*{showCart && <Cart/>}*/}
    </section>
  )
};

export default Navbar;