import React from 'react';
import Link from "next/link";
import {urlFor} from "../../lib/client";

const FooterBanner = ({
                        footerBanner: {
                          discount,
                          desc,
                          largeText1,
                          largeText2,
                          saleTime,
                          smallText,
                          midText,
                          product,
                          buttonText,
                          image
                        }
                      }) => {
  return (
    <section className="footer-banner-container">
      <section className="banner-desc">
        <section className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </section>
        
        
        <img
          src={urlFor(image)}
          alt=""
          width={250}
          height={250}
        />
        
        <section className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" className="button">
              {buttonText}
            </button>
          </Link>
        </section>
      
      </section>
    </section>
  )
};

export default FooterBanner;