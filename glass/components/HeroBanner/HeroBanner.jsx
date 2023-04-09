import React from 'react';
import Link from "next/link";

import {urlFor} from "../../lib/client";

const HeroBanner = ({heroBanner}) => {
  return (
    <section className="hero-banner-container">
      <section>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image"/>
        <section>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <section className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </section>
        </section>
      </section>
    </section>
  )
};

export default HeroBanner;