import React from 'react';
import {AiOutlineGithub} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs"

const Footer = (props) => {
  return (
    <section className="bg-primary-200 py-3 text-navyBlue-300 flex items-center justify-center gap-3 font-bold mt-10 | ">
      <p>© 2023 Glass</p>
      <p className="text-2xl flex gap-4">
        <a href="https://jasonliu.onrender.com/" target="_blank">
          <BsFillPersonFill className="hover:scale-125 transition duration-300"/>
        </a>
        <a href="https://github.com/jason469/glass" target="_blank">
          <AiOutlineGithub className="hover:scale-125 transition duration-300"/>
        </a>
      </p>
    </section>
  )
};

export default Footer;