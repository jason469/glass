import React from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";

const Footer = (props) => {
  return (
    <section className="footer-container">
      <p>2023 Glass All rights reserved</p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </section>
  )
};

export default Footer;