import React from 'react';
import {AiOutlineShopping} from "react-icons/ai";
import Link from "next/link";
import {useStateContext} from "../../context/StateContext";
import {Cart} from "../../components";

const Navbar = (props) => {
  const {showCart, setShowCart, totalQuantities} = useStateContext()
  
  return (
    <section className="navbar-container | bg-primary-200">
      <section className="font-logo | text-white text-4xl italic font-bold tracking-widest">
        <Link href="/" className="font-logo">Glass</Link>
      </section>
      
      <section className="flex gap-4 | uppercase | text-white tracking-wider">
          <a href="https://glass.sanity.studio/desk" target="_blank">Sanity</a>
      </section>
      
      <section className="flex gap-4 | text-white">
        <button type="button" className="cursor-pointer transform duration-300 bg-none border-none text-2xl leading-normal hover:scale-110 relative" onClick={() => setShowCart(true)}>
          <AiOutlineShopping className="text-white"/>
          <span className="cart-item-qty | bg-white | text-primary-200">{totalQuantities}</span>
        </button>
      </section>
      
      {
        showCart && <Cart/>
      }
    </section>
  )
};

export default Navbar;