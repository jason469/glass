import React from 'react';
import {AiOutlineGithub} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs"

const Footer = (props) => {
  return (
    <section className="footer-container | ">
      <p>© 2023 Glass</p>
      <p className="icons">
        <a href="https://jasonliu.onrender.com/" target="_blank">
          <BsFillPersonFill/>
        </a>
        <a href="https://github.com/jason469/glass" target="_blank">
          <AiOutlineGithub/>
        </a>
      </p>
    </section>
  )
};

export default Footer;